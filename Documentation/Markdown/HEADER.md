# Header notes

## Navigation toggler using `useState`.

### **1️⃣ useState Hook: `menuOpen` State**
```
const [menuOpen, setMenuOpen] = useState(false)
```
- `useState(false)` initializes a **state variable** called `menuOpen`.  
- `menuOpen` holds the **current state** (either `true` or `false`).  
- `setMenuOpen` is a **function** that updates `menuOpen`.  
- Initially, `menuOpen` is set to `false` (meaning the menu is **closed**).  

---

### **2️⃣ Function to Toggle Menu: `toggleMenu`**
```
const toggleMenu = () => {
    setMenuOpen(!menuOpen)
}
```
- When `toggleMenu` is called (e.g., when clicking the menu icon), it **inverts** the value of `menuOpen`.  
- If `menuOpen` is `false`, it sets it to `true` (opens the menu).  
- If `menuOpen` is `true`, it sets it to `false` (closes the menu).  
---

### **3️⃣ Using `menuOpen` to Show/Hide Menu**
```js
{
    menuOpen && (
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    )
}
```


### **Final Flow**
1. **User clicks** the menu icon (`RiMenu3Fill`).  
2. `toggleMenu()` is called.  
3. `menuOpen` changes from `false` → `true`.  
4. The dropdown menu appears.  
5. **User clicks again**, `menuOpen` changes back to `false`.  
6. The dropdown menu disappears.  
