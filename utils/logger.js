const formatMessage = (level, message) => {
	const timestamp = new Date().toISOString();
	return `[${timestamp}] [${level}] ${message}`;
};

const logger = {
	info(message, ...optionalParameters) {
		console.log(formatMessage('INFO', message), ...optionalParameters);
	},

	warn(message, ...optionalParameters) {
		console.warn(formatMessage('WARN', message), ...optionalParameters);
	},

	error(message, ...optionalParameters) {
		console.error(formatMessage('ERROR', message), ...optionalParameters);
	},

	debug(message, ...optionalParameters) {
		if (process.env.DEBUG === 'true') {
			console.debug(formatMessage('DEBUG', message), ...optionalParameters);
		}
	},
};

module.exports = { logger };
