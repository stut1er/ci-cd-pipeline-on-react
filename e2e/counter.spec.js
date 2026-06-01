// e2e/counter.spec.js
import { test, expect } from '@playwright/test';

test('полный рабочий процесс счётчика', async ({ page }) => {
  await page.goto('http://localhost:5173'); // адрес вашего dev-сервера

  // Проверяем начальное состояние (initialCount=5 из App.jsx)
  await expect(page.getByTestId('count-value')).toContainText('Счётчик: 5');
  await expect(page.getByTestId('parity-message')).toContainText('Нечётное число');

  // Кликаем "Увеличить"
  await page.getByTestId('increment-btn').click();
  await expect(page.getByTestId('count-value')).toContainText('Счётчик: 6');
  await expect(page.getByTestId('parity-message')).toContainText('Чётное число');

  // Кликаем "Уменьшить" дважды
  await page.getByTestId('decrement-btn').click();
  await page.getByTestId('decrement-btn').click();
  await expect(page.getByTestId('count-value')).toContainText('Счётчик: 4');

  // Сброс
  await page.getByTestId('reset-btn').click();
  await expect(page.getByTestId('count-value')).toContainText('Счётчик: 5');
});