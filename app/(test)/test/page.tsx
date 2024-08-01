"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useState } from 'react';

export default function ToastDemo() {
  const [seed, setSeed] = useState('octocat'); // Seed để tạo avatar

  const avatarUrl = `https://avatars.dicebear.com/api/identicon/${seed}.svg`; // Sử dụng phong cách Identicon giống GitHub

  console.log(avatarUrl); // URL avatar ngẫu nhiên

  return (
    <div>
      <h1>DiceBear Avatar Demo</h1>
      <img src={avatarUrl} alt="DiceBear Avatar" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        placeholder="Enter seed"
        style={{ marginTop: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
}
