# CI/CD Pipeline для React-приложения

[![CI/CD](https://github.com/stut1er/ci-cd-pipeline-on-react/actions/workflows/ci.yml/badge.svg)](https://github.com/stut1er/ci-cd-pipeline-on-react/actions/workflows/ci.yml)
[![Netlify](https://img.shields.io/badge/deployed-Netlify-blue)](https://devops-react-pipeline.netlify.app/)

**[Живой демо-сайт](https://devops-react-pipeline.netlify.app)**

## О проекте

Полноценный CI/CD пайплайн для React + Vite приложения с автоматическим тестированием и деплоем.

**Технологии:** React, Vite, GitHub Actions, Netlify.

## Что происходит при push в master

GitHub Actions автоматически запускает **5 этапов проверки**:

| № | Этап | Инструмент | Что проверяет |
|---|------|------------|----------------|
| 1 | **Type Check** | TypeScript (`tsc --noEmit`) | Корректность типов данных |
| 2 | **Lint** | ESLint | Стиль кода, потенциальные ошибки |
| 3 | **Unit Tests** | Vitest | Логику компонентов в изоляции |
| 4 | **E2E Tests** | Playwright | Полный пользовательский сценарий в браузере |
| 5 | **Storybook Tests** | Storybook Test Runner | Рендер компонентов без ошибок |

 **Все этапы должны пройти успешно** → автоматический деплой на Netlify

##  Детали тестов

### Unit тесты (Vitest) – 5 тестов
- Рендер компонента с разными пропсами
- Клики на кнопках (+1, -1, Сброс)
- Корректность изменения состояния
- Отображение чётности числа

### E2E тесты (Playwright) – 1 сценарий
- Полный цикл работы со счётчиком
- Проверка UI в реальном браузере (Chromium)

### Storybook тесты – 2 истории
- Стандартный счётчик
- Счётчик с начальным значением 10
