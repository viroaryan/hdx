## 2024-10-11 - Screen Reader Clarity for External Links
**Learning:** Target blank links often fail to communicate to screen readers that a new tab or window will be opened, which can disorient users. Some projects dynamically append a hidden screen reader text like "(opens in a new tab)" to external links.
**Action:** When updating or adding `target="_blank"` links, ensure they include an explicit `aria-label` or visually hidden `.sr-only` text such as `(opens in a new tab)` for screen reader users.
