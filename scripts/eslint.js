import { ESLint } from "eslint";

const eslint = new ESLint({
    fix: false,
    cache: false,
    useEslintrc: true,
});

async function runLint() {
    try {
        const results = await eslint.lintFiles(["src/**/*.{js,jsx,ts,tsx}"]);
        
        const formatter = await eslint.loadFormatter("stylish");
        const resultText = formatter.format(results);
        
        console.log(resultText);
        
        const hasErrors = results.some(result => result.errorCount > 0);
        if (hasErrors) {
            process.exitCode = 1;
        }
    } catch (error) {
        console.error("Ошибка линтинга:", error);
        process.exitCode = 1;
    }
}

runLint();