# Raven (Dale's Version)

**Version 2.1.0** - Code Editor Integration Update

## BackEnd Team
- Mattie Davis
- Elmore Siahaan
- Dale Barriga
- Anson Cordeiro

## What is Raven?
Raven is a tool to be used alongside VS Code that helps users to visualize and navigate their Java projects. It does this by generating a high level view of any Java project’s classes, methods, and attributes in a class diagram, allowing for extremely easy navigation of the codebase without having to dig through folders and files. Users can jump to any part of their codebase in VS Code by navigating this graph, so you can think of Raven as an alternative for a file explorer when working in a Java project.

## User Guide:
https://docs.google.com/document/d/1VgKowLNFYv1TmSFwJDp8FxdcIIf8r6igev5C4VsI-CY/edit

## Documentation:
https://docs.google.com/document/d/1h76mi16s63c1m3UmgfV3Yrm5BpBVlHCr9RKwgpqXdDk/edit#heading=h.z4f00g6f4qdi

## Final Presentation:
https://docs.google.com/presentation/d/1Ttnl4fL9R8wcbp_A9sYdgh50CFGYdZ-mCkBDW8GJPzY/edit?usp=sharing

## Getting Started Guide
- If you haven't already, install Git here: https://git-scm.com/download/win
- Open your terminal and use the `cd` command to navigate to the folder where you want the project to be stored
- Run `git clone https://github.com/mddvisu/raven`. A prompt may open up asking you for your git credentials

### Run the application:

#### Desktop Mode (Full Features):
- Install NodeJs here if you haven't already: https://nodejs.org/en
- Open your terminal and use the `cd` command to navigate to the folder where you stored the project
- Run `npm run build && neu run` to run the application

#### Web Mode (Browser Deployment):
Raven now supports both desktop and web deployments! When deployed to a web server (e.g., Netlify):
- Click "Open Project Directory" to select Java files from your local machine
- The browser will prompt you to select a folder containing `.java` files
- All parsing happens client-side in your browser
- **Note**: File watching and VS Code integration are only available in desktop mode

### ✨ Key Features:

#### 🎨 **Modern UI & Theming**
- **Three Beautiful Dark Themes**: Midnight Raven, Shadow Raven, and Obsidian Raven
- **Compact, Rounded Design**: Modern interface with optimized spacing and rounded corners
- **Color-Coded Class Types**: 
  - Blue gradient for normal classes
  - Red-to-orange gradient for abstract classes
  - Yellow gradient for interfaces
- **Theme Switcher**: Easy access palette icon in bottom-left corner

#### 📱 **Advanced Tab Management**
- **Multi-Tab Interface**: Open multiple class inspectors simultaneously
- **Closeable Tabs**: Close individual tabs with X button
- **Tab Highlighting**: Purple accent shows currently selected tab
- **Keyboard Shortcuts**: 
  - `Ctrl + Left Arrow`: Switch to previous tab
  - `Ctrl + Right Arrow`: Switch to next tab
- **Scrollable Tabs**: Seamlessly handle many open tabs

#### 🎯 **Smart Sidebar Navigation**
- **Click to Focus**: Click any class to center it in the graph view
- **Ctrl + Press**: While a sidebar item is focused, press Ctrl to open it in a new inspector tab
- **Visual Feedback**: White ring highlights focused sidebar items
- **Compact Design**: Optimized spacing with hover effects and smooth transitions

#### 🔍 **Interactive Class Visualization**
- **Clickable Class Nodes**: Click any class in the graph to open detailed inspector
- **Hover Effects**: Smooth animations and visual feedback
- **Color-Coded Gradients**: Instantly identify class types by color
- **Detailed Class Inspector**: View all attributes, methods, and relationships
- **Direct Code Navigation**: Click attributes/methods to jump to code in VS Code

#### 💻 **Integrated Code Editor (NEW in v2.1.0)**
- **Monaco Editor Integration**: VS Code's powerful editor built right into Raven
- **"Jump to Code" Feature**: Click any method, attribute, or constructor to view its source code
- **Smart Line Navigation**: Automatically jumps to and highlights the exact line of code
- **Syntax Highlighting**: Full Java syntax highlighting with Monaco
- **Theme Synchronization**: Editor theme automatically matches your selected Raven theme
- **Single Tab Instance**: One dedicated "Code Editor" tab that updates with each selection
- **Works in Web Mode**: File storage system enables code viewing even in browser deployment
- **Desktop & Web Support**: 
  - Desktop: Reads files directly from filesystem
  - Web: Uses in-memory storage from uploaded files
- **Read-Only View**: Safe code browsing without accidental modifications

#### 🚀 **Demo Mode & Empty States**
- **Instant Demo**: Try the Vehicle Management System example with one click
- **Beautiful Empty State**: Helpful crow-themed message when no classes are loaded
- **Quick Start Guide**: Clear instructions to get started

#### Try the Demo:
Don't have Java files handy? Click the **"🚀 Try Demo"** button to see Raven in action!

The demo showcases a complete Vehicle Management System with:
- **Abstract Classes**: `Vehicle` base class with common properties
- **Interfaces**: `Drivable` and `Maintainable` for different capabilities
- **Inheritance Hierarchy**: 
  - `Vehicle` → `Car` → `ElectricCar` (multi-level inheritance)
  - `Vehicle` → `Motorcycle`
  - `Vehicle` → `Truck`
- **Multiple Interface Implementation**: Classes implementing both `Drivable` and `Maintainable`
- **Access Modifiers**: public, private, protected members
- **Static Members**: Class-level tracking (e.g., total vehicles count)
- **Abstract Methods**: Requiring implementation in subclasses

This demo displays all of Raven's visualization features including class relationships, inheritance arrows, and interface implementations.

## Testing
To run all tests, run `npm test` within the project directory

All test files are located in `raven/src/tests/`
