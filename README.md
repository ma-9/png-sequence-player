
# PNG Sequence Player

A lightweight React component for playing PNG sequences like a video using a `canvas`. Supports transparency and custom FPS.

---

## 🚀 Installation
```sh
npm install png-sequence-player
```

---

## 📖 Usage

### 🧩 Basic Example:
```tsx
import { PNGSequence } from 'png-sequence-player';

const MyComponent = () => {
  const images = Array.from({ length: 420 }, (_, i) =>
    `/path-to-images/${String(i + 1).padStart(4, '0')}.png`
  );

  return <PNGSequence images={images} width={800} height={600} fps={30} />;
};
```

---

## 🔧 Props

| Prop | Type | Default | Description |
|-------|------|---------|-------------|
| `images` | `string[]` | **Required** | Array of image URLs |
| `width` | `number` | `800` | Width of the canvas |
| `height` | `number` | `600` | Height of the canvas |
| `fps` | `number` | `30` | Frames per second |

---

## 🛠️ Generating Image Paths:
Use the helper to generate zero-padded file names:

```ts
import { generateFileNames } from 'png-sequence-player';

const images = generateFileNames('/path-to-images', 420);
```

### ✅ Example Output:
- `/path-to-images/0001.png`
- `/path-to-images/0002.png`
- `/path-to-images/0420.png`

---

## 👨‍💻 Author
Created by **Manav Oza**  
[GitHub](https://github.com/ma-9)

---

## 📄 License
MIT
