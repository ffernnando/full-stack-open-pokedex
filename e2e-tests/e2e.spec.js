const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  /* beforeEach(async ({ page }) => {
    await page.goto('')
  }) */
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('clicing on a character opens its details page', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Home')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
  })
  /* test('clicing on a character opens its details page', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('overgrow')).toBeVisible()
  }) */
})
