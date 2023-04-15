export default (stream, callback) => {
	let buffer = Buffer.from('')

	stream.on('data', data => buffer = Buffer.concat([buffer, data]))
	stream.on('end', () => callback(buffer))
}
