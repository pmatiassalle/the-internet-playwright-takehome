# QA Playwright Take-Home

## Project Overview

This repository contains a concise Playwright + TypeScript automation suite for [`https://the-internet.herokuapp.com`](https://the-internet.herokuapp.com).  
The goal is to demonstrate reliable UI test design with clean structure, readable code, and practical CI support for a take-home assignment.

## Tech Stack

- Playwright Test
- TypeScript
- GitHub Actions (CI)

## Install Dependencies

```bash
npm install
npx playwright install
```

## Run Tests Locally

```bash
npm test
```

Optional:

```bash
npm run test:headed
npm run test:ui
```

## View Playwright Report

```bash
npm run report
```

## Project Structure

- `tests/`
  - `auth/` login scenarios
  - `dynamic-loading/` async content scenario
  - `forms/` form element interaction
  - `smoke/` basic navigation smoke checks
- `pages/` lightweight page objects (`HomePage`, `LoginPage`)
- `test-data/` typed data sources for parameterized tests
- `playwright.config.ts` Playwright configuration
- `.github/workflows/tests.yml` CI workflow

## Test Coverage Summary

- **Login data-driven tests** (`/login`)
  - Valid login (`tomsmith` / `SuperSecretPassword!`) -> assert `/secure` and success message
  - Invalid username -> assert error message
  - Invalid password -> assert error message
- **Dynamic loading test** (`/dynamic_loading/1`)
  - Click Start, validate loading transition, assert `Hello World!` is visible
- **Checkboxes/form input test** (`/checkboxes`)
  - Assert initial checked states, toggle both checkboxes, assert final states

## Design Decisions and Trade-offs

- Kept a **simple POM approach**: only where it improves readability and reuse (login/home), without introducing heavy abstractions.
- Kept test data external and typed (`test-data/loginCases.ts`) to keep scenarios easy to extend without duplicating test logic.
- Used **web-first assertions** and Playwright auto-waiting to reduce flakiness; no arbitrary sleeps/timeouts.
- Configured artifacts for debugging (`screenshot: only-on-failure`, `trace: retain-on-failure`) while avoiding unnecessary video output to keep runs lighter.
- Focused on a **small but representative** suite aligned with a 2-hour take-home scope, rather than broad feature coverage.

## CI/CD

GitHub Actions workflow (`.github/workflows/tests.yml`) runs on push and pull request:

- Installs Node dependencies
- Caches npm and Playwright browser binaries
- Installs Playwright browsers if needed
- Runs tests with up to 3 workers
- Uploads HTML report and `test-results` artifacts on failure
- Cancels outdated in-progress runs on the same branch to reduce CI noise

## AI Tools Usage

AI was used as an assistant for:

- project structure review,
- CI workflow validation,
- and test reliability checks.

Final implementation decisions and code-level trade-offs were reviewed manually.
