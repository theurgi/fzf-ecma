import baseConfig from '../../tsup.config'

export default {
	...baseConfig,
	entryPoints: ['main.ts'],
	outDir: 'dist',
}
