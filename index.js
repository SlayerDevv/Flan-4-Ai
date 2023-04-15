import replicate from 'node-replicate'

const model = 'replicate/flan-t5-xl:3ae0799123a1fe11f8c89fd99632f843fc5f7a761630160521c4253149754523'

export default async (prompt, parameters) => await replicate.run(model, {prompt, ...parameters})
