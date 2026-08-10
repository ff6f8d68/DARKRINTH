import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				// TODO: dont forget about this
				silenceDeprecations: ['import'],
			},
		},
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(projectRootDir, 'src'),
			},
		],
	},
	plugins: [
		vue(),
		svgLoader({
			svgoConfig: {
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false,
								cleanupIds: {
									minify: false,
								},
							},
						},
					},
				],
			},
		}),
	],

	clearScreen: false,
	server: {
		host: true,
		port: Number(process.env.PORT) || 3000,
	},
	preview: {
		host: true,
		port: Number(process.env.PORT) || 3000,
	},
	envPrefix: ['VITE_', 'TAURI_', 'MODRINTH_', 'SHARED_INSTANCES_'],
	build: {
		rolldownOptions: {
			onwarn(warning, defaultHandler) {
				if (warning.code === 'INEFFECTIVE_DYNAMIC_IMPORT') return
				defaultHandler(warning)
			},
		},
		target: 'safari13',
	},
})
