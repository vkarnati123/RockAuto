# Auto Parts E-commerce Design System

## Color Palette

### Primary Colors
- **Indigo/Purple** - `#6366f1`
  - Primary action color for buttons, links, and interactive elements
  - Use for: Add to cart buttons, primary CTAs, active states, focus indicators
  - Hover state: `#4f46e5`

- **Dark Gray** - `#3d3e4f`
  - Header background and secondary buttons
  - Use for: Navigation bar, compare buttons, secondary actions
  - Hover state: `#2d2e3f`

### Secondary Colors
- **Purple Accent Bar** - `#5b5fc7`
  - Decorative accent strip below header
  - Use for: Visual separation, brand accent elements

- **Light Indigo** - `#eef2ff`
  - Light background for highlighted sections
  - Use for: Selected vehicle display, filter info boxes, notification backgrounds
  - Border: `#c7d2fe`

### Neutral Colors
- **Background** - `#f5f5f7`
  - Main page background
  - Use for: Page backgrounds, content area backgrounds

- **White** - `#ffffff`
  - Card and component backgrounds
  - Use for: Product cards, detail pages, modals, panels

- **Black** - `#000000` / `#020817`
  - Primary text and checkout buttons
  - Use for: Headings, body text, final checkout actions

- **Gray Scale**
  - `#1f2937` - Dark gray text
  - `#374151` - Medium dark gray
  - `#6b7280` - Medium gray (secondary text)
  - `#9ca3af` - Light gray (tertiary text, icons)
  - `#d1d5db` - Border gray
  - `#e5e7eb` - Light border
  - `#f3f4f6` - Very light background
  - `#f9fafb` - Lightest background

### Semantic Colors
- **Success** - `#10b981`
  - Use for: Success messages, in-stock indicators
  
- **Error/Destructive** - `#ef4444`
  - Use for: Error messages, delete actions, out-of-stock

- **Warning** - `#f59e0b`
  - Use for: Warning messages, low stock alerts

- **Info** - `#3b82f6`
  - Use for: Informational messages, tooltips

---

## Typography

### Font Sizes

#### Display & Headings
- **Display Large** - `40px` / `text-[40px]`
  - Use for: Page titles, product detail names
  - Line height: `normal` or `1.2`
  - Example: "Product info and specifications", Product detail page title

- **Display Medium** - `32px` / `text-[32px]`
  - Use for: Section headings, major feature headings
  - Line height: `normal` or `1.2`
  - Example: "Similar Products", "Great Deals", CTA button text (uppercase)

- **Heading Large (h1)** - `28px` / `text-[28px]`
  - Use for: Major section titles
  - Line height: `1.5`
  - Example: Deal card titles

- **Heading Medium (h2)** - `25px` / `text-[25px]`
  - Use for: Subsection headings
  - Line height: `20px` or `1.2`
  - Example: "Continue Shopping" button text

- **Heading Small (h3)** - `20px` / `text-[20px]`
  - Use for: Card headings, minor section titles
  - Line height: `28px` or `1.4`
  - Example: "Your Vehicle", "Order Summary"

#### Body Text
- **Body Large** - `18px` / `text-[18px]`
  - Use for: Important descriptive text, prominent information
  - Line height: `28px` or `1.5`
  - Example: Vehicle display text, order summary totals

- **Body Base** - `16px` / `text-[16px]`
  - Default body text size
  - Line height: `24px` or `1.5`
  - Example: Product descriptions, form inputs, general content

- **Body Small** - `14px` / `text-[14px]`
  - Use for: Secondary information, labels, helper text
  - Line height: `20px` or `1.4`
  - Example: Product metadata, cart item details, button labels

- **Caption** - `12px` / `text-[12px]`
  - Use for: Fine print, timestamps, tertiary information
  - Line height: `18px` or `1.5`
  - Example: Security messages, metadata, subtle labels

- **Micro** - `11px` / `text-[11px]`
  - Use for: Very small labels, badges (sparingly)
  - Line height: `16px`
  - Example: Tiny labels in dropdowns

### Font Weights
- **Normal** - `400` / `font-normal`
  - Use for: Body text, descriptions, general content

- **Medium** - `500` / `font-medium`
  - Use for: Headings, labels, emphasized text

- **Semibold** - `600` / `font-semibold`
  - Use for: Strong emphasis, important headings

- **Bold** - `700` / `font-bold`
  - Use for: Maximum emphasis (use sparingly)

### Text Colors
- **Primary Text** - `text-gray-900` or `text-black`
  - Use for: Headings, primary content

- **Secondary Text** - `text-gray-700` or `text-gray-600`
  - Use for: Descriptions, secondary information

- **Tertiary Text** - `text-gray-500`
  - Use for: Metadata, helper text

- **Muted Text** - `text-gray-400`
  - Use for: Disabled states, placeholder text

- **Brand Text** - `text-[#6366f1]`
  - Use for: Prices, links, brand elements

---

## Spacing System

### Base Unit
The spacing system is based on 4px increments.

### Spacing Scale
- **4px** - `1` / `gap-1` / `p-1` / `m-1`
  - Use for: Very tight spacing, icon gaps

- **8px** - `2` / `gap-2` / `p-2` / `m-2`
  - Use for: Small gaps between related elements

- **12px** - `3` / `gap-3` / `p-3` / `m-3`
  - Use for: Medium-tight spacing

- **16px** - `4` / `gap-4` / `p-4` / `m-4`
  - Use for: Standard component padding, default gaps

- **20px** - `5` / `gap-5` / `p-5` / `m-5`
  - Use for: Comfortable spacing between elements

- **24px** - `6` / `gap-6` / `p-6` / `m-6`
  - Use for: Section padding, card padding

- **32px** - `8` / `gap-8` / `p-8` / `m-8`
  - Use for: Large section spacing

- **40px** - `10` / `gap-10` / `p-10` / `m-10`
  - Use for: Major section separation

- **48px** - `12` / `gap-12` / `p-12` / `m-12`
  - Use for: Large gaps between major sections

- **64px** - `16` / `gap-16` / `p-16` / `m-16`
  - Use for: Maximum spacing between sections

### Custom Spacing (Pixel-based)
For precise layouts, custom pixel values are used:
- `[25px]` - Card padding, panel padding
- `[38px]` - Specific vertical spacing
- `[52px]` - Large vertical gaps
- `[80px]` - Extra large gaps
- `[115px]` - Specific layout spacing

### Component Spacing Guidelines

#### Cards
- **Padding**: `p-6` (24px) or `p-[25px]` for standard cards
- **Gap between cards**: `gap-6` (24px)
- **Margin bottom**: `mb-8` or `mb-16` for section separation

#### Buttons
- **Padding**: `px-[16px] py-[8px]` for standard buttons
- **Large buttons**: `px-8 py-6` (32px horizontal, 24px vertical)
- **Gap between buttons**: `gap-6` (24px) or `gap-3` (12px) for tight groups

#### Forms
- **Input padding**: `px-4 py-2` (16px horizontal, 8px vertical)
- **Label margin**: `mb-2` (8px below labels)
- **Field spacing**: `space-y-4` or `space-y-6` between form fields

#### Grid Layouts
- **Product grid**: `gap-6` (24px)
- **Detail grid**: `gap-12` (48px)
- **Tight grids**: `gap-4` (16px)

#### Sections
- **Top padding**: `pt-32` (128px) for main content below header
- **Section margin**: `mt-16` (64px) between major sections
- **Bottom padding**: `pb-16` (64px) at page bottom

---

## Border Radius

### Border Radius Scale
- **Small** - `rounded` or `rounded-[4px]`
  - Use for: Small elements, badges

- **Medium** - `rounded-md` or `rounded-[6px]`
  - Use for: Buttons, inputs, small cards

- **Large** - `rounded-lg` or `rounded-[8px]`
  - Use for: Cards, panels, modals

- **Extra Large** - `rounded-[12px]`
  - Use for: Large cards, feature sections

- **Full** - `rounded-full`
  - Use for: Pills, circular buttons, badges, CTA buttons

---

## Shadows & Elevation

### Shadow Scale
- **Small** - `shadow-sm`
  - Use for: Subtle elevation, card borders
  - Example: Product cards at rest

- **Medium** - `shadow-md`
  - Use for: Hover states, dropdowns
  - Example: Hovered cards

- **Large** - `shadow-lg`
  - Use for: Modals, popovers, important elevated elements
  - Example: Dropdown menus, vehicle selector

- **Custom Button Shadow** - `shadow-[0px_2px_0px_0px_#000000]`
  - Use for: Large CTA buttons for a pressed/3D effect
  - Example: "Compare" and "Add to cart" buttons

---

## Borders

### Border Widths
- **Default** - `border` (1px)
  - Use for: Standard borders on cards, inputs

- **Medium** - `border-2` (2px)
  - Use for: Emphasized borders, focus states

### Border Colors
- **Light** - `border-gray-200`
  - Use for: Subtle borders, card outlines

- **Medium** - `border-gray-300`
  - Use for: Standard borders

- **Dark** - `border-slate-200`
  - Use for: Input borders, defined separation

- **Brand** - `border-[#6366f1]` or `border-[#c7d2fe]`
  - Use for: Active/selected states, brand highlights

---

## Interactive States

### Hover States
- **Background hover**: `hover:bg-gray-50` (for white backgrounds)
- **Background hover**: `hover:bg-gray-100` (for light backgrounds)
- **Brand hover**: `hover:bg-[#4f46e5]` (for indigo buttons)
- **Dark hover**: `hover:bg-[#2d2e3f]` (for dark gray buttons)
- **Shadow hover**: `hover:shadow-lg`
- **Border hover**: `hover:border-[#6366f1]`

### Active/Selected States
- **Background**: `bg-[#eef2ff]` with `border-[#c7d2fe]`
- **Text color**: `text-[#6366f1]`

### Disabled States
- **Background**: `bg-gray-100`
- **Text**: `text-gray-400`
- **Cursor**: `cursor-not-allowed`
- **Opacity**: `opacity-50`

### Transitions
- **Default**: `transition-colors` (smooth color transitions)
- **All**: `transition-all` (for complex state changes)
- **Duration**: Default (150ms) or custom as needed

---

## Layout Guidelines

### Container Widths
- **Max width**: `max-w-[1600px]` for main content
- **Centered**: `mx-auto` for centering containers
- **Full width**: `w-full` for fluid layouts

### Grid Systems
- **Product grid**: `grid-cols-6` (6 columns)
- **Detail grid**: `grid-cols-2` (2 columns)
- **Deals grid**: `grid-cols-2` (2 columns)
- **Responsive**: Use breakpoints for mobile/tablet adjustments

### Flexbox
- **Default gap**: `gap-4` or `gap-6`
- **Alignment**: `items-center` for vertical centering
- **Justify**: `justify-between` for space distribution

---

## Component Heights

### Buttons
- **Small**: `h-[40px]`
- **Medium**: `h-[48px]`
- **Large**: `h-[62px]`

### Inputs
- **Standard**: `h-[40px]` or `h-[48px]`

### Cards
- **Product image**: `h-[159px]`
- **Deal card**: `h-[272px]`
- **Product detail image**: `h-[508px]`

---

## Usage Guidelines

### When to Use Primary Color (#6366f1)
- Primary call-to-action buttons (Add to Cart)
- Links and interactive text
- Active navigation items
- Selected states
- Price displays
- Focus indicators

### When to Use Secondary Color (#3d3e4f)
- Header and navigation backgrounds
- Secondary action buttons (Compare)
- Alternative CTAs
- Dark mode UI elements

### When to Use Neutral Colors
- **White**: Clean backgrounds, content cards, modals
- **Light gray (#f5f5f7)**: Page backgrounds
- **Medium gray**: Secondary text, borders
- **Dark gray**: Primary text content

### Typography Hierarchy
1. Use 40px for main page titles (max 1 per page)
2. Use 32px for section headings (2-3 per page)
3. Use 20px for subsection headings
4. Use 16px for body text (default)
5. Use 14px for secondary information
6. Use 12px for fine print only

### Spacing Consistency
- Always maintain consistent spacing within similar components
- Use larger spacing (16px+) between unrelated elements
- Use smaller spacing (8px or less) for tightly related items
- Maintain vertical rhythm with consistent section spacing (64px)

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for body text
- Maintain minimum 3:1 contrast ratio for large text (18px+)
- Ensure interactive elements have clear hover/focus states
- Use sufficient padding for touch targets (minimum 44px)

---

## Component-Specific Guidelines

### Product Cards
- Background: White
- Border: `border-gray-200`
- Padding: `p-4`
- Hover: `shadow-lg` + `border-[#6366f1]`
- Image height: `h-[159px]`

### Buttons
- Primary: `bg-[#6366f1]` with `hover:bg-[#4f46e5]`
- Secondary: `bg-[#3d3e4f]` with `hover:bg-[#2d2e3f]`
- Destructive: `bg-black` with `hover:bg-gray-800`
- Border radius: `rounded-[6px]` or `rounded-full` for CTAs
- Add shadow: `shadow-[0px_2px_0px_0px_#000000]` for large CTAs

### Forms
- Input background: `border border-slate-200`
- Focus state: `focus:border-[#6366f1]` + `focus:ring-[#6366f1]`
- Label: 14px medium weight
- Helper text: 12px gray-600

### Navigation
- Header background: `bg-[#3d3e4f]`
- Accent bar: `bg-[#5b5fc7]`
- Active link: Brighter text color
- Hover: Subtle background change

### Modals & Overlays
- Background: White
- Border radius: `rounded-lg`
- Shadow: `shadow-lg`
- Max width: Appropriate for content (not full screen)
- Padding: `p-6` or `p-8`

---

## Best Practices

1. **Consistency**: Use the same spacing, colors, and typography throughout
2. **Hierarchy**: Establish clear visual hierarchy with size and weight
3. **Whitespace**: Don't be afraid of whitespace; it improves readability
4. **Contrast**: Ensure sufficient contrast for accessibility
5. **Responsiveness**: Test all sizes and adjust spacing appropriately
6. **Performance**: Minimize custom values; use system tokens when possible
7. **Maintainability**: Document any deviations from the system
