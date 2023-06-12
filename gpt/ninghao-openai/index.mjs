import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration)

try {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: '写一首描述春天的诗歌',
        temperature: 0.7,
        max_tokens: 256
    })
    console.log(response.data);
} catch(error) {
    console.log(error)
}