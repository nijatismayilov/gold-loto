module.exports = {
	reactStrictMode: true,
	webpack: (config, { webpack, isServer }) => {
		if (isServer) {
			config.plugins.push(
				new webpack.NormalModuleReplacementPlugin(/worker-timers$/, "./mock-worker-timers.js")
			);
		}

		return config;
	},
};
