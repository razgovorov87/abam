{
    "dart.flutterSdkPath": ".fvm/flutter_sdk",
    // Remove .fvm files from search
    "search.exclude": {
        "**/.fvm": true
    },
    // Remove from file watching
    "files.watcherExclude": {
        "**/.fvm": true
    },
    "workbench.colorTheme": "Material Theme Darker High Contrast",
    "workbench.iconTheme": "eq-material-theme-icons-darker",
    "workbench.colorCustomizations": {
        "[Material Theme Darker High Contrast]": {
            "statusBar.debuggingBackground": "#212121"
        }
    },
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true,
        "source.fixAll": true
    },
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "files.autoSave": "afterDelay",
    "[dart]": {
        "editor.formatOnType": true,
        "editor.formatOnSave": true,
        "editor.rulers": [
            120
        ],
        "editor.selectionHighlight": false,
        "editor.suggest.snippetsPreventQuickSuggestions": false,
        "editor.suggestSelection": "first",
        "editor.tabCompletion": "onlySnippets",
        "editor.wordBasedSuggestions": false
    },
    "dart.lineLength": 120,
    "dart.previewFlutterUiGuides": true,
    "dart.previewFlutterUiGuidesCustomTracking": true,
    "dart.debugExternalLibraries": false,
    "dart.debugSdkLibraries": false,
    "dart.openDevTools": "flutter",
    "dart.runPubGetOnPubspecChanges": false,
    "dart.flutterSdkPaths": [
        "/Users/evgenijrazgovorov/develop/flutter",
        "/Users/usr/fvm/versions/dev",
    ],
    "bracketPairColorizer.depreciation-notice": false,
    "explorer.compactFolders": false,
    "editor.unicodeHighlight.allowedLocales": {
        "ru": true
    },
    "dart.debugExternalPackageLibraries": false,
    "explorer.confirmDelete": false,
    "security.workspace.trust.untrustedFiles": "open",
    "git.confirmSync": false,
    "actionButtons": {
        "defaultColor": "#ff0034",
        "loadNpmCommands": false,
        "reloadButton": "♻️",
        "commands": [
            {
                "name": "Code Generator",
                "color": "green",
                "singleInstance": true,
                "command": "bash scripts/code_generator.sh",
            },
            {
                "name": "Import sorter",
                "color": "green",
                "command": "bash scripts/import_sorter.sh",
            }
        ]
    },
    "dart.showInspectorNotificationsForWidgetErrors": false,
    "explorer.confirmDragAndDrop": false,
    "editor.minimap.enabled": false,
    "window.zoomLevel": 1,
}
