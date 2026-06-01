import { ESLint } from "eslint";

async function runLint() {
    try {

        const eslint = new ESLint({
        });

        const filesToCheck = ["src/**/*.{js,jsx,ts,tsx}"];

        const results = await eslint.lintFiles(filesToCheck);

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