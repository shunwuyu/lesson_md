from pathlib import Path
from llama_index import download_loader

ImageReader = download_loader("ImageReader")

# If the Image has key-value pairs text, use text_type = "key_value"
loader = ImageReader(text_type = "key_value")
documents = loader.load_data(file=Path('./receipt.webp'))

print(documents)