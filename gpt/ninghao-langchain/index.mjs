import * as dotenv from 'dotenv';
dotenv.config()

import { HuggingFaceInference } from 'langchain/llms/hf'

const model = new HuggingFaceInference({
    model: 'bigscience/bloom-3d'
});

const result = awiat model.call('从前');
console.log(result);
