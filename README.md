# پروژه اولیه

پروژه اولیه را از%problem.initial_project% دریافت کنید. ساختار فایل‌های این پروژه به صورت زیر است.

```
.
├── package.json
├── src
│   ├── assets
│   ├── components
│   ├── contexts
│   │   ├── <mark>Auth.jsx</mark>
│   │   └── theme.jsx
│   ├── index.js
│   ├── layouts
│   ├── pages
│   │   ├── add-product.jsx
│   │   ├── contact-us.jsx
│   │   ├── dashboard.jsx
│   │   ├── edit-product.jsx
│   │   ├── <mark>login.jsx</mark>
│   │   └── products-list.jsx
│   ├── routes
│   ├── services
│   └── setupTests.js
```

# جزئیات

در این تمرین میخواهیم کانتکست مرتبط به ورود کاربر را ایجاد کنیم و آن را با _localStorage_ کاربر هماهنگ کنیم.

**مواردی که باید برای این قسمت انجام دهید:**

- درون `src/contexts/Auth.jsx`
  - مقدار پیش فرض استیت `user` را با فانکشن `getLocalStorage` مقدار دهی کنید
  - با استفاده از _useEffect_ ، هرگاه مقدار استیت _user_ تغییر کرد، مقدار تازه‌ی آن را با _localStorage_ کاربر هماهنگ کنید
- درون `src/pages/login.jsx`
  - در پاسخ موفق ورود از فانکشن `handleLogin` ، وضعیت کاربر را به روز کنید
  - پس از آن کاربر را به صفحه‌ی `/dashboard` هدایت کنید
  - اگر کاربر از پیش وارد شده است، به جای نمایش دوباره‌ی صفحه‌ی ورود، او را به صفحه‌ی `/dashboard` هدایت کنیم.

در صورت نیاز به یادآوری، به درسنامه‌ی [Context](https://quera.ir/college/8565/chapter/31130/lesson/103585/) و هوک [useLocalStorage](https://quera.ir/college/8565/chapter/31135/lesson/102712/) مراجعه کنید.

# نکات

- شما تنها مجاز به اعمال تغییرات در فایل‌‌های `src/contexts/Auth.jsx` و `src/pages/login.jsx` هستید.
- فقط فایلی را که مجاز به تغییر هستید باید آپلود نمایید.