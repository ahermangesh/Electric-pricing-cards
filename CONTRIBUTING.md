# Contributing to Electric Pricing Cards

Thank you for your interest in contributing to Electric Pricing Cards! 🎉

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git
- Basic knowledge of React and TypeScript

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/your-username/Electric-pricing-cards.git
   cd Electric-pricing-cards
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open http://localhost:5173** to see the project running

## 🛠️ Making Changes

### Branch Naming
- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation changes
- `refactor/description` - for code refactoring

### Development Process

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-awesome-feature
   ```

2. **Make your changes** following our code style guidelines

3. **Test your changes thoroughly:**
   - Test in both dark and light modes
   - Check responsive behavior on different screen sizes
   - Verify performance on slower devices
   - Test with different prop combinations

4. **Commit your changes:**
   ```bash
   git commit -m "feat: add awesome new feature"
   ```

   Use conventional commit format:
   - `feat:` - new feature
   - `fix:` - bug fix
   - `docs:` - documentation changes
   - `style:` - formatting, missing semicolons, etc.
   - `refactor:` - code refactoring
   - `test:` - adding tests
   - `chore:` - maintenance tasks

## 🎨 Code Style Guidelines

### TypeScript/React
- Use functional components with hooks
- Properly type all props and functions
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Follow existing code formatting

### CSS
- Use CSS custom properties for dynamic values
- Maintain consistency with existing styles
- Consider both dark and light themes
- Ensure responsive design

### Example Component Structure:
```tsx
import React, { useEffect, useRef } from 'react';
import './ComponentName.css';

interface ComponentProps {
  /** Description of the prop */
  someProp: string;
  /** Optional prop with default */
  optionalProp?: number;
}

/**
 * Brief description of what this component does
 */
const ComponentName: React.FC<ComponentProps> = ({
  someProp,
  optionalProp = 1
}) => {
  // Component logic here
  
  return (
    <div className="component-name">
      {/* JSX here */}
    </div>
  );
};

export default ComponentName;
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] Component renders correctly in both themes
- [ ] All props work as expected
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Performance is acceptable (no frame drops)
- [ ] Accessibility - keyboard navigation works
- [ ] Browser compatibility (Chrome, Firefox, Safari)

### Visual Testing
- Take screenshots of your changes
- Compare with existing behavior
- Test edge cases (very long text, small containers, etc.)

## 📝 Documentation

### README Updates
- Update examples if you add new features
- Add new props to the props table
- Include usage examples for new functionality

### Code Comments
- Add JSDoc comments for public APIs
- Explain complex algorithms or logic
- Document any browser-specific workarounds

## 🚀 Submitting Changes

### Pull Request Process

1. **Push to your fork:**
   ```bash
   git push origin feature/your-awesome-feature
   ```

2. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what you changed
   - Screenshots/GIFs if visual changes
   - Reference any related issues

3. **PR Template:**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring
   
   ## Screenshots/GIFs
   [Include if applicable]
   
   ## Testing
   - [ ] Tested in Chrome
   - [ ] Tested in Firefox
   - [ ] Tested on mobile
   - [ ] Tested dark/light modes
   
   ## Checklist
   - [ ] Code follows project style guidelines
   - [ ] Self-review completed
   - [ ] Documentation updated
   ```

### Review Process
- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged

## 🐛 Reporting Bugs

### Bug Report Template
```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- Browser: [Chrome 118, Firefox 119, etc.]
- Device: [Desktop, Mobile, etc.]
- OS: [Windows, macOS, Linux, etc.]
```

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How would you like it implemented?

**Alternatives Considered**
Any alternative solutions?

**Additional Context**
Screenshots, mockups, etc.
```

## 🏆 Recognition

Contributors will be:
- Listed in the README contributors section
- Mentioned in release notes
- Thanked in commit messages

## 📞 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discord**: [Join our community] (if available)

## 🎯 Priority Areas

We especially welcome contributions in:
- Performance optimizations
- Accessibility improvements
- Browser compatibility fixes
- Documentation and examples
- Test coverage
- Mobile experience improvements

Thank you for contributing to Electric Pricing Cards! ⚡