# UI Component Library - Auto Parts E-commerce

## Table of Contents
1. [Buttons](#buttons)
2. [Form Inputs](#form-inputs)
3. [Cards](#cards)
4. [Navigation](#navigation)
5. [Headers & Sections](#headers--sections)
6. [Badges & Labels](#badges--labels)
7. [Modals & Overlays](#modals--overlays)
8. [Lists & Tables](#lists--tables)
9. [Icons & Images](#icons--images)
10. [Toasts & Notifications](#toasts--notifications)

---

## Buttons

### Primary Button (Add to Cart)
**Purpose**: Main call-to-action buttons for adding items to cart

**States**:
- **Normal**: 
  - Background: `bg-[#6366f1]`
  - Text: `text-white`
  - Border radius: `rounded-[6px]`
  - Padding: `px-[16px] py-[8px]` (small) or `px-8 py-6` (large)
  - Shadow: `shadow-[0px_2px_0px_0px_#000000]` (for large CTAs)
  
- **Hover**: 
  - Background: `hover:bg-[#4f46e5]`
  - Transition: `transition-colors`
  
- **Active**: 
  - Background: `bg-[#4338ca]`
  
- **Disabled**: 
  - Background: `bg-gray-300`
  - Text: `text-gray-500`
  - Cursor: `cursor-not-allowed`
  - Opacity: `opacity-50`

**Usage**:
```tsx
<button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-[16px] py-[8px] rounded-[6px] transition-colors">
  Add to Cart
</button>
```

**Variants**:
- **Small**: `h-[40px]` - Used in product cards
- **Medium**: `h-[48px]` - Standard buttons
- **Large**: `h-[62px]` - Hero CTAs
- **With Icon**: Includes ShoppingCart icon with `gap-3`

---

### Secondary Button (Compare, Continue Shopping)
**Purpose**: Secondary actions, alternative CTAs

**States**:
- **Normal**: 
  - Background: `bg-[#3d3e4f]`
  - Text: `text-white`
  - Border radius: `rounded-[6px]` or `rounded-full` (for large CTAs)
  - Padding: `px-[16px] py-[8px]`
  - Shadow: `shadow-[0px_2px_0px_0px_#000000]` (for large CTAs)
  
- **Hover**: 
  - Background: `hover:bg-[#2d2e3f]`
  - Transition: `transition-colors`
  
- **Active**: 
  - Background: `bg-[#1d1e2f]`
  
- **Disabled**: 
  - Background: `bg-gray-400`
  - Text: `text-gray-600`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<button className="bg-[#3d3e4f] hover:bg-[#2d2e3f] text-white px-[16px] py-[8px] rounded-[6px] transition-colors">
  Compare
</button>
```

---

### Tertiary Button (Switch Vehicle, Filters)
**Purpose**: Less prominent actions, toggles

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border border-slate-200`
  - Text: `text-gray-600`
  - Border radius: `rounded-[6px]`
  - Padding: `px-[16px] py-[8px]`
  
- **Hover**: 
  - Background: `hover:bg-gray-50`
  - Transition: `transition-colors`
  
- **Active**: 
  - Background: `bg-gray-100`
  - Border: `border-[#6366f1]`
  
- **Disabled**: 
  - Background: `bg-gray-50`
  - Border: `border-gray-200`
  - Text: `text-gray-400`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<button className="bg-white border border-slate-200 hover:bg-gray-50 text-gray-600 px-[16px] py-[8px] rounded-[6px] transition-colors">
  Switch Vehicle
</button>
```

---

### Destructive Button (Checkout, Delete)
**Purpose**: Final actions, destructive operations

**States**:
- **Normal**: 
  - Background: `bg-black` or `bg-red-600`
  - Text: `text-white`
  - Border radius: `rounded-[6px]`
  - Padding: `px-[16px] py-[24px]` or `px-[16px] py-[8px]`
  
- **Hover**: 
  - Background: `hover:bg-gray-800` or `hover:bg-red-700`
  - Transition: `transition-colors`
  
- **Active**: 
  - Background: `bg-gray-900` or `bg-red-800`
  
- **Disabled**: 
  - Background: `bg-gray-400`
  - Text: `text-gray-200`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<button className="bg-black hover:bg-gray-800 text-white px-[16px] py-[24px] rounded-[6px] transition-colors">
  Proceed to Checkout
</button>
```

---

### Icon Button (Back, Close, Menu)
**Purpose**: Icon-only actions

**States**:
- **Normal**: 
  - Background: `transparent` or `bg-white`
  - Size: `w-[50px] h-[50px]` or `w-10 h-10`
  - Border radius: `rounded-lg`
  
- **Hover**: 
  - Background: `hover:bg-gray-100`
  - Transition: `transition-colors`
  
- **Active**: 
  - Background: `bg-gray-200`
  
- **Disabled**: 
  - Opacity: `opacity-30`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<button className="w-[50px] h-[50px] flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
  <ArrowLeft className="w-8 h-8 text-gray-900" />
</button>
```

---

### Link Button (Text Links, Clear Filters)
**Purpose**: Text-based links styled as buttons

**States**:
- **Normal**: 
  - Background: `transparent`
  - Text: `text-[#6366f1]`
  - Decoration: `underline`
  
- **Hover**: 
  - Text: `hover:text-[#4f46e5]`
  
- **Active**: 
  - Text: `text-[#4338ca]`
  
- **Disabled**: 
  - Text: `text-gray-400`
  - Decoration: `no-underline`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<button className="text-[#6366f1] hover:text-[#4f46e5] underline text-sm">
  Clear filters
</button>
```

---

## Form Inputs

### Text Input (Search, Email, Password)
**Purpose**: Single-line text entry

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border border-gray-300`
  - Text: `text-gray-900`
  - Placeholder: `placeholder:text-gray-400`
  - Border radius: `rounded-lg`
  - Padding: `px-4 py-3`
  - Height: `h-[48px]`
  
- **Focus**: 
  - Border: `focus:border-[#6366f1]`
  - Ring: `focus:ring-2 focus:ring-[#6366f1]/20`
  - Outline: `outline-none`
  
- **Hover**: 
  - Border: `hover:border-gray-400`
  
- **Error**: 
  - Border: `border-red-500`
  - Ring: `ring-2 ring-red-500/20`
  
- **Disabled**: 
  - Background: `bg-gray-100`
  - Border: `border-gray-200`
  - Text: `text-gray-500`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<input 
  type="text"
  className="w-full h-[48px] px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none"
  placeholder="Enter text..."
/>
```

**Variants**:
- **Search Bar**: Includes search icon, `rounded-full`, larger padding
- **Password**: Includes eye icon toggle
- **Email**: Type validation styling

---

### Textarea (Comments, Notes)
**Purpose**: Multi-line text entry

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border border-gray-300`
  - Border radius: `rounded-lg`
  - Padding: `px-4 py-3`
  - Min height: `min-h-[120px]`
  - Resize: `resize-vertical`
  
- **Focus**: 
  - Border: `focus:border-[#6366f1]`
  - Ring: `focus:ring-2 focus:ring-[#6366f1]/20`
  
- **Hover**: 
  - Border: `hover:border-gray-400`
  
- **Error**: 
  - Border: `border-red-500`
  
- **Disabled**: 
  - Background: `bg-gray-100`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<textarea 
  className="w-full min-h-[120px] px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none resize-vertical"
  placeholder="Enter notes..."
/>
```

---

### Select Dropdown (Vehicle Year, Make, Model)
**Purpose**: Single selection from options

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border border-gray-300`
  - Border radius: `rounded-lg`
  - Padding: `px-4 py-3`
  - Height: `h-[48px]`
  - Appearance: `appearance-none`
  - Icon: ChevronDown
  
- **Focus**: 
  - Border: `focus:border-[#6366f1]`
  - Ring: `focus:ring-2 focus:ring-[#6366f1]/20`
  
- **Hover**: 
  - Border: `hover:border-gray-400`
  
- **Open**: 
  - Border: `border-[#6366f1]`
  - Dropdown background: `bg-white`
  - Dropdown shadow: `shadow-lg`
  - Dropdown border: `border border-gray-200`
  
- **Disabled**: 
  - Background: `bg-gray-100`
  - Text: `text-gray-400`

**Dropdown Menu States**:
- **Option Normal**: `bg-white` `text-gray-900`
- **Option Hover**: `bg-gray-50`
- **Option Selected**: `bg-[#eef2ff]` `text-[#6366f1]`

**Usage**:
```tsx
<select className="w-full h-[48px] px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 outline-none appearance-none">
  <option>Select option</option>
</select>
```

---

### Checkbox (Filters, Terms Agreement)
**Purpose**: Multiple selections, boolean toggles

**States**:
- **Unchecked Normal**: 
  - Background: `bg-white`
  - Border: `border-2 border-gray-300`
  - Size: `w-5 h-5`
  - Border radius: `rounded`
  
- **Unchecked Hover**: 
  - Border: `border-gray-400`
  
- **Checked Normal**: 
  - Background: `bg-[#6366f1]`
  - Border: `border-[#6366f1]`
  - Checkmark: White
  
- **Checked Hover**: 
  - Background: `bg-[#4f46e5]`
  
- **Focus**: 
  - Ring: `ring-2 ring-[#6366f1]/20`
  
- **Disabled Unchecked**: 
  - Background: `bg-gray-100`
  - Border: `border-gray-200`
  
- **Disabled Checked**: 
  - Background: `bg-gray-400`
  - Border: `border-gray-400`

**Usage**:
```tsx
<input 
  type="checkbox"
  className="w-5 h-5 border-2 border-gray-300 rounded bg-white checked:bg-[#6366f1] checked:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20"
/>
```

---

### Radio Button (Payment Method, Shipping Options)
**Purpose**: Single selection from group

**States**:
- **Unselected Normal**: 
  - Background: `bg-white`
  - Border: `border-2 border-gray-300`
  - Size: `w-5 h-5`
  - Border radius: `rounded-full`
  
- **Unselected Hover**: 
  - Border: `border-gray-400`
  
- **Selected Normal**: 
  - Background: `bg-white`
  - Border: `border-[#6366f1]` `border-[6px]`
  
- **Selected Hover**: 
  - Border: `border-[#4f46e5]`
  
- **Focus**: 
  - Ring: `ring-2 ring-[#6366f1]/20`
  
- **Disabled**: 
  - Background: `bg-gray-100`
  - Border: `border-gray-200`

**Usage**:
```tsx
<input 
  type="radio"
  className="w-5 h-5 border-2 border-gray-300 rounded-full bg-white checked:border-[#6366f1] checked:border-[6px] focus:ring-2 focus:ring-[#6366f1]/20"
/>
```

---

### Number Input (Quantity Selector)
**Purpose**: Numeric value with increment/decrement

**States**:
- **Normal**: 
  - Container: `flex items-center gap-2`
  - Input: `w-16 text-center border border-gray-300 rounded`
  - Buttons: Icon buttons with `+` and `-`
  
- **Focus**: 
  - Input border: `focus:border-[#6366f1]`
  
- **Disabled**: 
  - Input: `bg-gray-100`
  - Buttons: `opacity-50 cursor-not-allowed`

**Usage**:
```tsx
<div className="flex items-center gap-2">
  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">-</button>
  <input type="number" className="w-16 text-center border border-gray-300 rounded" value="1" />
  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50">+</button>
</div>
```

---

### Search Input (Header Search)
**Purpose**: Search functionality with icon

**States**:
- **Normal**: 
  - Background: `bg-white/90`
  - Border: `border border-gray-200`
  - Border radius: `rounded-full`
  - Padding: `pl-12 pr-4 py-2` (space for icon)
  - Icon: Search icon, `text-gray-400`
  
- **Focus**: 
  - Background: `bg-white`
  - Border: `focus:border-[#6366f1]`
  - Ring: `focus:ring-2 focus:ring-[#6366f1]/20`
  
- **Hover**: 
  - Border: `hover:border-gray-300`
  
- **Active/Typing**: 
  - Icon color: `text-[#6366f1]`

**Usage**:
```tsx
<div className="relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input 
    type="search"
    className="w-full pl-12 pr-4 py-2 bg-white/90 border border-gray-200 rounded-full focus:bg-white focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20"
    placeholder="Search products..."
  />
</div>
```

---

## Cards

### Product Card
**Purpose**: Display individual product in grid

**Structure**:
- Container: `bg-white rounded-lg border border-gray-200 p-4`
- Image container: `h-[159px] rounded-lg overflow-hidden`
- Content area: `space-y-2 mt-4`
- Price: `text-[#6366f1]`
- Button: Primary or secondary

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border-gray-200`
  - Shadow: `shadow-sm`
  
- **Hover**: 
  - Border: `hover:border-[#6366f1]`
  - Shadow: `hover:shadow-lg`
  - Transition: `transition-all`
  - Transform: Optional `hover:scale-105`
  
- **Active/Selected**: 
  - Border: `border-[#6366f1]`
  - Background: `bg-[#eef2ff]`

**Usage**:
```tsx
<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:border-[#6366f1] hover:shadow-lg transition-all">
  <div className="h-[159px] rounded-lg overflow-hidden">
    <img src="..." alt="..." className="w-full h-full object-cover" />
  </div>
  <div className="mt-4 space-y-2">
    <h3 className="text-gray-900">Product Name</h3>
    <p className="text-[#6366f1]">$45.99</p>
    <button className="w-full bg-[#6366f1] text-white px-4 py-2 rounded-[6px]">
      Add to Cart
    </button>
  </div>
</div>
```

**Variants**:
- **Out of Stock**: Overlay with `opacity-60` and badge
- **Compact**: Smaller image, reduced padding
- **Featured**: Larger size, additional details

---

### Deal Card
**Purpose**: Display promotional offers

**Structure**:
- Container: `bg-white border border-gray-200 rounded-lg p-8 h-[272px]`
- Content: Centered vertically
- Title: `text-[28px]`
- Description: `text-[20px] text-gray-600`

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border-gray-200`
  
- **Hover**: 
  - Border: `hover:border-[#6366f1]`
  - Shadow: `hover:shadow-md`
  - Transition: `transition-all`
  - Cursor: `cursor-pointer`

**Usage**:
```tsx
<div className="bg-white border border-gray-200 rounded-lg p-8 h-[272px] hover:border-[#6366f1] hover:shadow-md transition-all cursor-pointer flex flex-col justify-center">
  <h4 className="text-[28px] mb-3">Winter Sale - Up to 40% Off</h4>
  <p className="text-[20px] text-gray-600">Premium brake pads and rotors</p>
</div>
```

---

### Vehicle Card
**Purpose**: Display saved vehicles in garage

**Structure**:
- Container: `bg-white rounded-lg border border-gray-200 p-6`
- Header: Vehicle info with edit/delete buttons
- Content: Details grid
- Badge: "Default" indicator if applicable

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border-gray-200`
  
- **Hover**: 
  - Shadow: `hover:shadow-md`
  
- **Selected/Default**: 
  - Border: `border-[#c7d2fe]`
  - Background: `bg-[#eef2ff]`
  - Badge: `bg-[#6366f1] text-white`

**Usage**:
```tsx
<div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
  <div className="flex justify-between items-start mb-4">
    <div>
      <h3 className="text-gray-900">2020 Honda Civic</h3>
      <p className="text-gray-600 text-sm">2.0L 4-Cylinder</p>
    </div>
    <div className="flex gap-2">
      <button className="text-gray-600 hover:text-[#6366f1]">Edit</button>
      <button className="text-gray-600 hover:text-red-600">Delete</button>
    </div>
  </div>
</div>
```

---

### Cart Item Card
**Purpose**: Display item in shopping cart

**Structure**:
- Container: Horizontal layout with image, details, quantity, price
- Image: `w-[159px] h-[159px]`
- Content: Product name, details, remove button
- Quantity selector: Number input
- Price: Right-aligned

**States**:
- **Normal**: 
  - Background: `transparent` or `bg-white`
  - Border bottom: `border-b border-gray-200`
  
- **Hover**: 
  - Background: `hover:bg-gray-50`

**Usage**:
```tsx
<div className="flex gap-6 pb-6 border-b border-gray-200 hover:bg-gray-50 transition-colors">
  <img src="..." className="w-[159px] h-[159px] rounded-lg object-cover" />
  <div className="flex-1">
    <h3 className="text-gray-900">Product Name</h3>
    <p className="text-gray-600 text-sm">Category</p>
    <button className="text-red-600 text-sm mt-2">Remove</button>
  </div>
  <div className="flex items-center gap-2">
    {/* Quantity selector */}
  </div>
  <p className="text-gray-900">$45.99</p>
</div>
```

---

### Summary Card (Order Summary, Vehicle Panel)
**Purpose**: Display summary information

**Structure**:
- Container: `bg-white rounded-lg border border-gray-200 p-[25px]`
- Sections: Divided by borders
- Line items: `flex justify-between`
- Total: Bold, larger text

**States**:
- **Normal**: 
  - Background: `bg-white`
  - Border: `border-gray-200`
  - Shadow: None

**Usage**:
```tsx
<div className="bg-white rounded-lg border border-gray-200 p-[25px]">
  <h3 className="text-[20px] mb-6">Order Summary</h3>
  <div className="space-y-4 mb-6">
    <div className="flex justify-between">
      <span className="text-gray-700">Subtotal</span>
      <span className="text-gray-700">$129.97</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-700">Shipping</span>
      <span className="text-gray-700">$9.99</span>
    </div>
  </div>
  <div className="border-t border-gray-200 pt-4">
    <div className="flex justify-between">
      <span className="text-gray-900">Total</span>
      <span className="text-gray-900">$139.96</span>
    </div>
  </div>
</div>
```

---

## Navigation

### Header Navigation
**Purpose**: Main site navigation bar

**Structure**:
- Container: `bg-[#3d3e4f]` with `h-[80px]`
- Logo: Clickable, left-aligned
- Search bar: Center
- Actions: Right-aligned (cart, compare, login, garage)
- Accent bar: `bg-[#5b5fc7] h-[8px]` below header

**States**:
- **Normal**: 
  - Background: `bg-[#3d3e4f]`
  - Text: `text-white`
  
- **Scrolled**: 
  - Optional shadow: `shadow-md`
  - Optional sticky: `sticky top-0 z-50`

**Icon Button States** (Cart, Compare, etc.):
- **Normal**: `text-white/80`
- **Hover**: `hover:text-white`
- **Active**: `text-white` with badge

**Usage**:
```tsx
<header className="bg-[#3d3e4f] h-[80px]">
  <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
    <div className="flex items-center gap-8">
      <button onClick={onLogoClick}>Logo</button>
    </div>
    <div className="flex-1 max-w-[600px]">
      <SearchInput />
    </div>
    <div className="flex items-center gap-6">
      <IconButton icon={<ShoppingCart />} badge={3} />
      <IconButton icon={<User />} />
    </div>
  </div>
</header>
<div className="bg-[#5b5fc7] h-[8px]" />
```

---

### Category Sidebar
**Purpose**: Navigate product categories

**Structure**:
- Container: `w-[280px] bg-white border-r border-gray-200 p-6`
- Title: `text-[20px] mb-6`
- Categories: List of buttons
- Icons: Category-specific icons

**Category Item States**:
- **Normal**: 
  - Background: `transparent`
  - Text: `text-gray-700`
  - Padding: `px-4 py-3`
  - Border radius: `rounded-lg`
  
- **Hover**: 
  - Background: `hover:bg-gray-50`
  - Text: `hover:text-gray-900`
  
- **Active/Selected**: 
  - Background: `bg-[#eef2ff]`
  - Text: `text-[#6366f1]`
  - Border: `border-l-4 border-[#6366f1]`

**Usage**:
```tsx
<aside className="w-[280px] bg-white border-r border-gray-200 p-6">
  <h2 className="text-[20px] mb-6">Categories</h2>
  <nav className="space-y-2">
    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors">
      <IconEngine className="w-5 h-5" />
      <span>Engine Parts</span>
    </button>
    <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#eef2ff] text-[#6366f1] rounded-lg border-l-4 border-[#6366f1]">
      <IconBrake className="w-5 h-5" />
      <span>Brakes</span>
    </button>
  </nav>
</aside>
```

---

### Breadcrumbs
**Purpose**: Show navigation hierarchy

**Structure**:
- Container: `flex items-center gap-2`
- Separators: `/` or `<ChevronRight />`
- Links: Clickable text

**States**:
- **Link Normal**: `text-gray-600`
- **Link Hover**: `hover:text-[#6366f1]`
- **Current**: `text-gray-900` (not clickable)
- **Separator**: `text-gray-400`

**Usage**:
```tsx
<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-gray-600 hover:text-[#6366f1]">Home</a>
  <ChevronRight className="w-4 h-4 text-gray-400" />
  <a href="#" className="text-gray-600 hover:text-[#6366f1]">Brakes</a>
  <ChevronRight className="w-4 h-4 text-gray-400" />
  <span className="text-gray-900">Brake Pads</span>
</nav>
```

---

### Tab Navigation (Product Details)
**Purpose**: Switch between content sections

**Structure**:
- Container: `flex gap-4 border-b border-gray-200`
- Tabs: Buttons with bottom border indicator

**Tab States**:
- **Normal**: 
  - Background: `transparent`
  - Text: `text-gray-600`
  - Border bottom: `transparent`
  - Padding: `px-4 py-3`
  
- **Hover**: 
  - Text: `hover:text-gray-900`
  - Border bottom: `hover:border-gray-300`
  
- **Active**: 
  - Text: `text-[#6366f1]`
  - Border bottom: `border-b-2 border-[#6366f1]`

**Usage**:
```tsx
<div className="flex gap-4 border-b border-gray-200">
  <button className="px-4 py-3 text-[#6366f1] border-b-2 border-[#6366f1]">
    Details
  </button>
  <button className="px-4 py-3 text-gray-600 hover:text-gray-900">
    Specifications
  </button>
  <button className="px-4 py-3 text-gray-600 hover:text-gray-900">
    Reviews
  </button>
</div>
```

---

### Pagination
**Purpose**: Navigate through pages of results

**Structure**:
- Container: `flex items-center gap-2 justify-center`
- Previous/Next: Arrow buttons
- Page numbers: Number buttons
- Current page: Highlighted

**States**:
- **Page Button Normal**: 
  - Background: `bg-white`
  - Border: `border border-gray-200`
  - Text: `text-gray-700`
  - Size: `w-10 h-10`
  - Border radius: `rounded`
  
- **Page Button Hover**: 
  - Background: `hover:bg-gray-50`
  - Border: `hover:border-gray-300`
  
- **Page Button Active/Current**: 
  - Background: `bg-[#6366f1]`
  - Border: `border-[#6366f1]`
  - Text: `text-white`
  
- **Arrow Button Disabled**: 
  - Opacity: `opacity-50`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<nav className="flex items-center gap-2 justify-center mt-8">
  <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">
    <ChevronLeft className="w-4 h-4" />
  </button>
  <button className="w-10 h-10 bg-[#6366f1] border border-[#6366f1] text-white rounded">1</button>
  <button className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded hover:bg-gray-50">2</button>
  <button className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded hover:bg-gray-50">3</button>
  <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">
    <ChevronRight className="w-4 h-4" />
  </button>
</nav>
```

---

## Headers & Sections

### Page Header
**Purpose**: Title and description for pages

**Structure**:
- Container: `mb-8` or `mb-12`
- Title: `text-[40px]` or `text-[32px]`
- Description: `text-gray-600 mt-2`
- Optional actions: Buttons aligned right

**Usage**:
```tsx
<header className="mb-12">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-[40px] text-gray-900">Product Comparison</h1>
      <p className="text-gray-600 mt-2">Compare features and specifications side-by-side</p>
    </div>
    <button className="bg-[#6366f1] text-white px-6 py-3 rounded-[6px]">
      Add Product
    </button>
  </div>
</header>
```

---

### Section Header
**Purpose**: Title for content sections

**Structure**:
- Title: `text-[32px]` or `text-[28px]`
- Optional divider: `border-b border-gray-200`
- Margin: `mb-8`

**Usage**:
```tsx
<div className="mb-8">
  <h2 className="text-[32px] text-gray-900">Similar Products</h2>
</div>
```

---

### Empty State
**Purpose**: Display when no content available

**Structure**:
- Container: Centered content, padding
- Icon: Large, gray icon
- Title: `text-[20px] text-gray-900`
- Description: `text-gray-600`
- Action: Primary button

**Usage**:
```tsx
<div className="flex flex-col items-center justify-center py-16 px-6 text-center">
  <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
  <h3 className="text-[20px] text-gray-900 mb-2">Your cart is empty</h3>
  <p className="text-gray-600 mb-6">Add some products to get started</p>
  <button className="bg-[#6366f1] text-white px-6 py-3 rounded-[6px]">
    Browse Products
  </button>
</div>
```

---

## Badges & Labels

### Notification Badge (Cart Count, Compare Count)
**Purpose**: Show count of items

**Structure**:
- Container: `absolute -top-1 -right-1`
- Badge: `bg-red-600 text-white rounded-full`
- Size: `min-w-[20px] h-[20px]`
- Padding: `px-1.5`
- Font: `text-xs`

**States**:
- **Normal**: `bg-red-600 text-white`
- **High count (10+)**: May increase size slightly

**Usage**:
```tsx
<div className="relative">
  <ShoppingCart className="w-6 h-6" />
  <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] bg-red-600 text-white rounded-full flex items-center justify-center text-xs px-1.5">
    3
  </span>
</div>
```

---

### Status Badge (In Stock, Out of Stock)
**Purpose**: Show product availability

**Variants**:
- **In Stock**: 
  - Background: `bg-green-100`
  - Text: `text-green-800`
  - Border: `border border-green-200`
  
- **Out of Stock**: 
  - Background: `bg-red-100`
  - Text: `text-red-800`
  - Border: `border border-red-200`
  
- **Low Stock**: 
  - Background: `bg-yellow-100`
  - Text: `text-yellow-800`
  - Border: `border border-yellow-200`

**Structure**:
- Padding: `px-2.5 py-1`
- Border radius: `rounded-full`
- Font size: `text-xs`

**Usage**:
```tsx
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs border bg-green-100 text-green-800 border-green-200">
  In Stock
</span>
```

---

### Category Badge
**Purpose**: Tag products with categories

**Structure**:
- Background: `bg-gray-100`
- Text: `text-gray-700`
- Padding: `px-3 py-1`
- Border radius: `rounded-full`
- Font size: `text-sm`

**States**:
- **Normal**: As above
- **Hover**: `hover:bg-gray-200` (if clickable)
- **Active**: `bg-[#eef2ff] text-[#6366f1]`

**Usage**:
```tsx
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
  Engine Parts
</span>
```

---

### Default Badge (Default Vehicle)
**Purpose**: Indicate default selection

**Structure**:
- Background: `bg-[#6366f1]`
- Text: `text-white`
- Padding: `px-2.5 py-1`
- Border radius: `rounded-full`
- Font size: `text-xs`

**Usage**:
```tsx
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-[#6366f1] text-white">
  Default
</span>
```

---

## Modals & Overlays

### Modal Dialog (Vehicle Add/Edit)
**Purpose**: Show focused content overlay

**Structure**:
- Backdrop: `fixed inset-0 bg-black/50 z-40`
- Container: `fixed inset-0 flex items-center justify-center z-50`
- Modal: `bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4`
- Header: Title with close button
- Body: `p-6` scrollable content
- Footer: Action buttons

**States**:
- **Entering**: Fade in animation
- **Exiting**: Fade out animation

**Usage**:
```tsx
<div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
<div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
    <div className="flex items-center justify-between p-6 border-b border-gray-200">
      <h2 className="text-[24px]">Add Vehicle</h2>
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        <X className="w-6 h-6" />
      </button>
    </div>
    <div className="p-6 overflow-y-auto">
      {/* Modal content */}
    </div>
    <div className="flex gap-3 p-6 border-t border-gray-200">
      <button className="flex-1 px-4 py-2 border border-gray-300 rounded-[6px] hover:bg-gray-50">
        Cancel
      </button>
      <button className="flex-1 px-4 py-2 bg-[#6366f1] text-white rounded-[6px] hover:bg-[#4f46e5]">
        Save
      </button>
    </div>
  </div>
</div>
```

---

### Dropdown Menu (Vehicle Selector, Filter Menu)
**Purpose**: Show contextual menu

**Structure**:
- Trigger: Button with chevron or three dots
- Menu: `absolute bg-white rounded-lg border border-gray-200 shadow-lg z-10`
- Items: List of clickable options

**Menu Item States**:
- **Normal**: 
  - Background: `bg-white`
  - Text: `text-gray-700`
  - Padding: `px-4 py-2`
  
- **Hover**: 
  - Background: `hover:bg-gray-50`
  
- **Active/Selected**: 
  - Background: `bg-[#eef2ff]`
  - Text: `text-[#6366f1]`
  
- **Disabled**: 
  - Text: `text-gray-400`
  - Cursor: `cursor-not-allowed`

**Usage**:
```tsx
<div className="relative">
  <button onClick={toggleMenu} className="px-4 py-2 border border-gray-300 rounded-[6px] flex items-center gap-2">
    <span>Select Vehicle</span>
    <ChevronDown className="w-4 h-4" />
  </button>
  
  {isOpen && (
    <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-lg border border-gray-200 shadow-lg z-10 max-h-[300px] overflow-y-auto">
      <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
        2020 Honda Civic
      </button>
      <button className="w-full px-4 py-2 text-left bg-[#eef2ff] text-[#6366f1]">
        2018 Toyota Camry
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-gray-700">
        2019 Ford F-150
      </button>
    </div>
  )}
</div>
```

---

### Tooltip
**Purpose**: Show additional information on hover

**Structure**:
- Container: `relative` wrapper
- Tooltip: `absolute bottom-full mb-2 bg-gray-900 text-white px-3 py-2 rounded text-sm whitespace-nowrap`
- Arrow: Optional pointing arrow

**States**:
- **Hidden**: `opacity-0 invisible`
- **Visible (on hover)**: `opacity-100 visible`
- **Transition**: `transition-opacity duration-200`

**Usage**:
```tsx
<div className="relative group">
  <button className="px-4 py-2 bg-gray-100 rounded">
    Hover me
  </button>
  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
    Helpful tooltip text
  </div>
</div>
```

---

## Lists & Tables

### Product List (Search Results)
**Purpose**: Display products in list format

**Structure**:
- Container: `space-y-4`
- Item: Horizontal layout with image, details, actions
- Divider: `border-b border-gray-200`

**Usage**:
```tsx
<div className="space-y-4">
  <div className="flex gap-6 pb-4 border-b border-gray-200">
    <img src="..." className="w-32 h-32 rounded-lg object-cover" />
    <div className="flex-1">
      <h3 className="text-gray-900">Product Name</h3>
      <p className="text-gray-600 text-sm mt-1">Category • In Stock</p>
      <p className="text-[#6366f1] mt-2">$45.99</p>
    </div>
    <div className="flex flex-col justify-center gap-2">
      <button className="px-4 py-2 bg-[#6366f1] text-white rounded-[6px]">
        Add to Cart
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-[6px]">
        Compare
      </button>
    </div>
  </div>
</div>
```

---

### Comparison Table
**Purpose**: Compare product specifications

**Structure**:
- Container: `grid grid-cols-[200px_1fr_1fr]` (or more columns)
- Header row: Product images and names
- Rows: Alternating background colors
- Cells: Aligned content

**Row States**:
- **Even rows**: `bg-white`
- **Odd rows**: `bg-gray-50`
- **Header**: `bg-gray-100`

**Usage**:
```tsx
<div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-4 text-left">Specification</th>
        <th className="p-4">Product A</th>
        <th className="p-4">Product B</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b border-gray-200">
        <td className="p-4 text-gray-700">Price</td>
        <td className="p-4 text-center text-[#6366f1]">$45.99</td>
        <td className="p-4 text-center text-[#6366f1]">$39.99</td>
      </tr>
      <tr className="bg-gray-50 border-b border-gray-200">
        <td className="p-4 text-gray-700">Category</td>
        <td className="p-4 text-center">Brakes</td>
        <td className="p-4 text-center">Brakes</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### Vehicle List (Garage)
**Purpose**: Display saved vehicles

**Structure**:
- Container: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Each item: Vehicle card

**Usage**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {vehicles.map(vehicle => (
    <VehicleCard key={vehicle.id} vehicle={vehicle} />
  ))}
</div>
```

---

## Icons & Images

### Icon Usage
**Purpose**: Visual indicators and actions

**Library**: `lucide-react`

**Common Icons**:
- Shopping: `ShoppingCart`, `Package`
- Navigation: `ChevronRight`, `ChevronDown`, `ArrowLeft`, `Menu`
- Actions: `Search`, `X`, `Plus`, `Minus`, `Edit`, `Trash2`
- User: `User`, `LogIn`, `LogOut`
- Vehicle: `Car`, `Settings`
- Status: `Check`, `AlertCircle`, `Info`

**Sizes**:
- **Small**: `w-4 h-4` - Used in text, badges
- **Medium**: `w-5 h-5` or `w-6 h-6` - Standard icons
- **Large**: `w-8 h-8` - Prominent icons
- **Extra Large**: `w-12 h-12` or `w-16 h-16` - Empty states, features

**Colors**:
- **Default**: `text-gray-600`
- **Interactive**: `text-gray-700 hover:text-[#6366f1]`
- **Active**: `text-[#6366f1]`
- **Muted**: `text-gray-400`
- **White**: `text-white` (on dark backgrounds)

**Usage**:
```tsx
import { ShoppingCart, Search, User } from 'lucide-react';

<ShoppingCart className="w-6 h-6 text-gray-600 hover:text-[#6366f1]" />
```

---

### Product Images
**Purpose**: Display product photos

**Aspect Ratios**:
- **Square**: `1:1` - Product grid, thumbnails
- **Wide**: `16:9` - Featured images, banners

**Sizes**:
- **Thumbnail**: `w-32 h-32` or `w-[100px] h-[100px]`
- **Card**: `h-[159px]` (width flexible)
- **Detail**: `h-[508px]` (width flexible)

**Styling**:
- Border radius: `rounded-lg`
- Object fit: `object-cover`
- Border: `border border-gray-200` (optional)

**States**:
- **Loading**: Skeleton placeholder `bg-gray-200 animate-pulse`
- **Error**: Fallback icon or placeholder
- **Hover**: Optional zoom effect `hover:scale-105 transition-transform`

**Usage**:
```tsx
<img 
  src="https://..."
  alt="Product name"
  className="w-full h-[159px] object-cover rounded-lg border border-gray-200"
/>
```

---

### Logo
**Purpose**: Brand identity

**Sizes**:
- **Header**: Height `h-10` or `h-12`
- **Large**: Height `h-16` or larger

**Usage**:
```tsx
<button onClick={onLogoClick} className="flex items-center">
  <img src="/logo.svg" alt="Brand" className="h-10" />
</button>
```

---

### Background Images
**Purpose**: Decorative backgrounds

**Usage**:
- Full coverage: `bg-cover bg-center`
- Overlay: Dark overlay `before:absolute before:inset-0 before:bg-black/50`
- Fixed: `bg-fixed` for parallax effect

---

## Toasts & Notifications

### Toast Notification
**Purpose**: Temporary feedback messages

**Library**: `sonner`

**Variants**:
- **Success**: Green checkmark, confirmation messages
- **Error**: Red X, error messages
- **Info**: Blue info icon, informational messages
- **Warning**: Yellow warning icon, warnings

**Structure**:
- Position: `top-right`, `bottom-right`, etc.
- Duration: Default 2000-3000ms
- Action buttons: Optional
- Dismissible: X button

**States**:
- **Entering**: Slide in from right
- **Visible**: Full opacity
- **Exiting**: Slide out to right

**Usage**:
```tsx
import { toast } from 'sonner@2.0.3';

// Success
toast.success('Product added to cart!', { duration: 2000 });

// Error
toast.error('Maximum 2 products can be compared at once');

// Info
toast.info('Product is already in comparison list');

// With custom action
toast('Item removed', {
  action: {
    label: 'Undo',
    onClick: () => handleUndo()
  }
});
```

---

### Info Banner (Filter Info)
**Purpose**: Persistent information display

**Structure**:
- Background: `bg-[#eef2ff]`
- Border: `border border-[#c7d2fe]`
- Border radius: `rounded-lg`
- Padding: `p-4`
- Text: `text-[#4338ca]`
- Action: Clear/dismiss button

**Usage**:
```tsx
<div className="mb-6 p-4 bg-[#eef2ff] rounded-lg border border-[#c7d2fe]">
  <p className="text-[#4338ca]">
    Showing results for "brake pads" in category "Brakes"
  </p>
  <button className="mt-2 text-[#6366f1] hover:text-[#4f46e5] underline text-sm">
    Clear filters
  </button>
</div>
```

---

### Alert Message (Empty State, Warnings)
**Purpose**: Important messages within content

**Variants**:
- **Info**: Blue background
- **Warning**: Yellow background
- **Error**: Red background
- **Success**: Green background

**Structure**:
- Background: Tinted color
- Border: Matching color
- Icon: Left-aligned
- Text: Message content
- Actions: Optional buttons

**Usage**:
```tsx
<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
  <AlertCircle className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-yellow-800">This product has low stock. Order soon!</p>
  </div>
</div>
```

---

## Component State Summary

### Universal Interactive States
All interactive elements should support these states where applicable:

1. **Normal/Default**: Resting state
2. **Hover**: Mouse over (desktop only)
3. **Focus**: Keyboard navigation, accessibility
4. **Active**: Being clicked/pressed
5. **Disabled**: Not interactive
6. **Loading**: Processing/fetching data
7. **Error**: Invalid or error state
8. **Success**: Successful completion

### Transitions
- Default duration: `150ms` (Tailwind default)
- Property: `transition-colors` for color changes
- Property: `transition-all` for multiple properties
- Easing: Default ease-in-out

### Accessibility Considerations
- All interactive elements must be keyboard accessible
- Focus states must be clearly visible
- Color is not the only indicator of state
- Sufficient contrast ratios maintained
- ARIA labels where appropriate
- Touch targets minimum 44x44px

---

## Usage Guidelines

### When to Use Each Button Type

**Primary Button**:
- Main action on a page (Add to Cart, Submit, Save)
- Maximum 1-2 per screen section
- High contrast, draws attention

**Secondary Button**:
- Alternative actions (Compare, View Details)
- Can have multiple per section
- Lower visual priority than primary

**Tertiary Button**:
- Least important actions (Cancel, Back, Filters)
- Minimal visual weight
- Supporting actions

**Destructive Button**:
- Final checkout, delete operations
- Warns user of significant action
- Use sparingly

**Icon Button**:
- Space-constrained areas
- Obvious actions (close, menu, back)
- Toolbar actions

**Link Button**:
- Navigation within content
- Secondary actions that don't require emphasis
- "Learn more", "View all", etc.

### When to Use Each Card Type

**Product Card**:
- Product grids and catalogs
- Consistent size and layout
- Clickable for details

**Deal Card**:
- Promotional content
- Featured offers
- Call-out sections

**Vehicle Card**:
- User-saved items
- Manageable entities
- Actions within card

**Summary Card**:
- Checkout process
- Order summaries
- Information panels

### Form Input Best Practices

1. Always include labels
2. Use appropriate input types
3. Show validation errors clearly
4. Provide helpful placeholder text
5. Group related fields
6. Use consistent spacing
7. Make required fields obvious
8. Disable submit until valid

### Navigation Best Practices

1. Highlight current location
2. Maintain consistent structure
3. Provide clear hierarchy
4. Limit depth to 3 levels
5. Make actions obvious
6. Include breadcrumbs for deep navigation
7. Mobile-responsive patterns

---

This component library serves as the foundation for building consistent, accessible, and user-friendly interfaces throughout the auto parts e-commerce application.
