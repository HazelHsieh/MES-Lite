// tailwind

tailwind.config = {
theme: {
  extend: {
    colors: {
      dark: {
        900: '#1a222c', // 背景深色
        800: '#24303f', // 卡片背景
        700: '#2d3b4e', // 側邊欄背景
        600: '#3d4d63', // 邊框/Hover
      },
      // 新增廠商版專用顏色 (Vendor Theme)
      vendor: {
        sidebar: '#393e4e', // 廠商版側邊欄背景 (深藍)
        // hover: '#2563eb',   // 廠商版 hover 顏色 (亮藍)
        // active: '#3b82f6',  // 廠商版 active 顏色 (更亮藍)
        // border: '#172554',  // 廠商版邊框色 (更深藍)
      },
      accent: {
        green: '#10b981',
        yellow: '#fbbf24',
        blue: '#3b82f6',
        danger: '#ef4444'
      },
      brand: { 
        blue: '#3b82f6', 
        hover: '#2563eb' 
      }
    }
  }
}
}