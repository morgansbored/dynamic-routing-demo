module.exports = {
    port: 8000,
    watch: true,
    debug: true,
    nodeResolve: true,
    appIndex: 'index.html',
    rootDir: '',
    plugins: [],
    preserveSymlinks: true,
    open: true,
    middlewares: [
        function rewriteIndex(context, next) {
            return next();
        },
    ],
};
