/*
 * @Author: maggot-code
 * @Date: 2021-04-22 16:22:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-25 09:42:36
 * @Description: file content
 */
// declare module '*.vue' {
//     import { App, defineComponent } from 'vue'
//     const component: ReturnType<typeof defineComponent> & {
//         install(app: App): void
//     }
//     export default component
// }

declare namespace NodeJS {
    interface Process {
        env: ProcessEnv
    }
    interface ProcessEnv {
        /**
         * By default, there are two modes in Vite:
         * 
         * * `development` is used by vite and vite serve
         * * `production` is used by vite build
         * 
         * You can overwrite the default mode used for a command by passing the --mode option flag.
         * 
         */
        readonly NODE_ENV: 'development' | 'production'
    }
}

declare var process: NodeJS.Process

declare module '*.vue' {
    import { App, defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent> & {
        install(app: App): void
    }
    export default component
}

declare module '*.gif' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.jpeg' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.webp' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string;
    export default src
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
}