# Contributing to ShowcasePro

First off, thank you for considering contributing to ShowcasePro! It's people like you that make ShowcasePro such a great tool for developers worldwide.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the TypeScript and React style guides
- Include thoughtfully-worded, well-structured tests when applicable
- Document new code based on the Documentation Styleguide
- End all files with a newline

## Development Setup

1. **Fork and clone the repo**
   ```bash
   git clone https://github.com/yourusername/showcasepro.git
   cd showcasepro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

5. **Make your changes and commit**
   ```bash
   git commit -m "Add amazing feature"
   ```

6. **Push to your fork and submit a pull request**
   ```bash
   git push origin feature/amazing-feature
   ```

## Style Guidelines

### TypeScript Style Guide

- Use TypeScript for all new code
- Prefer interfaces over types for object shapes
- Use meaningful names for variables, functions, and classes
- Add JSDoc comments for public APIs

### React Style Guide

- Use functional components with hooks
- Follow the existing component structure
- Use proper TypeScript types for props
- Implement proper accessibility features

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### CSS/Tailwind Guidelines

- Use Tailwind utility classes when possible
- Follow mobile-first responsive design
- Maintain consistent spacing and typography scales
- Use semantic color names in the design system

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments for new functions and components
- Update type definitions as needed
- Include examples in documentation

## Testing

- Write unit tests for new utilities and functions
- Test components with React Testing Library
- Ensure all tests pass before submitting PR
- Add integration tests for new features when applicable

## Release Process

1. Update version numbers following semantic versioning
2. Update CHANGELOG.md with new features and fixes
3. Create a pull request to main branch
4. After review and merge, create a GitHub release
5. GitHub Actions will automatically deploy to demo site

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- GitHub repository contributors section
- Special thanks in release notes for significant contributions

## Questions?

Feel free to create an issue for any questions about contributing. We're here to help!

Thank you for contributing to ShowcasePro! 🚀
