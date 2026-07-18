# 🚀 AgentQE – Autonomous Website QA Engineer (MCP Server)

## Overview

AgentQE is an AI-powered Quality Assurance (QA) assistant built as a NitroStack MCP Server.

Instead of manually testing websites or writing complex Selenium/Playwright scripts, AgentQE enables any MCP-compatible AI agent to automatically audit a website, detect issues, prioritize them, and create GitHub issues for developers.

The user simply provides a website URL, and the AI performs an end-to-end quality audit.

---

# Problem Statement

Manual website testing is time-consuming and often skipped under tight deadlines. Traditional automation frameworks require engineers to write and maintain fragile test scripts.

As a result, websites are frequently deployed with:

- Broken links
- JavaScript console errors
- Accessibility violations
- Missing images
- Slow-loading pages

AgentQE automates this entire process using MCP.

---

# Solution

AgentQE uses NitroStack's Model Context Protocol (MCP) to provide AI agents with specialized QA tools.

The agent:

1. Crawls the website
2. Discovers pages
3. Tests every page
4. Detects issues
5. Prioritizes defects
6. Creates GitHub issues automatically

---

# Features

- 🌐 Website Crawling
- 🔍 Broken Link Detection
- ⚠️ JavaScript Console Error Detection
- ♿ Accessibility Checks
- 📊 Severity Prioritization
- 📝 Automatic GitHub Issue Creation
- 📈 QA Dashboard

---

# MCP Tools

### 1. crawl_site(url)

Discovers all reachable pages of the target website.

---

### 2. inspect_page(page)

Checks:

- HTTP errors
- Broken links
- Missing assets
- JavaScript console errors

---

### 3. accessibility_scan(page)

Detects:

- Missing alt text
- Missing form labels
- Accessibility violations

---

### 4. prioritize_findings()

Ranks issues as:

- Critical
- High
- Medium
- Low

based on severity and impact.

---

### 5. create_github_issue()

Automatically creates structured GitHub Issues containing:

- Issue Title
- Description
- Severity
- URL
- Suggested Fix

---

# MCP Resources

## site_map

Stores all discovered pages from the website crawl.

Example:

- Home
- Login
- Products
- Contact

---

## audit_history

Stores previous QA reports and enables regression comparison.

---

# MCP Prompts

## Full Website Audit

Runs the complete QA pipeline.

---

## Regression Check

Compares the latest audit with previous scans to identify newly introduced issues.

---

# Tech Stack

- NitroStack MCP
- TypeScript
- Node.js
- Playwright
- GitHub REST API

---

# Project Structure

src/

├── tools/

├── resources/

├── prompts/

├── widgets/

├── server.ts

└── index.ts

---

# How to Run

## Install dependencies

npm install

## Start development server

npm run dev

## Build project

npm run build

## Deploy

npm run deploy

---

# MCP Setup

This project is built using NitroStack MCP.

The server exposes:

- 5 MCP Tools
- 2 MCP Resources
- 2 Prompt Templates

The AI agent communicates with the server through the Model Context Protocol (MCP), allowing autonomous execution of QA workflows.

---

# Workflow

User

↓

Enter Website URL

↓

crawl_site()

↓

inspect_page()

↓

accessibility_scan()

↓

prioritize_findings()

↓

create_github_issue()

↓

QA Report Generated

---

# Future Improvements

- Lighthouse Integration
- CI/CD Pipeline Support
- AI Fix Suggestions
- Performance Optimization Reports
- Regression Trend Dashboard

---

# License

MIT License
