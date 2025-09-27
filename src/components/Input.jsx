// src/components/ui/Input.jsx
export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    className = "",
    ...rest
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          border-2 border-gray-200 rounded-xl px-4 py-3 text-base
          focus:border-growly-green focus:outline-none transition-colors w-full
          ${className}
        `}
        {...rest}
      />
    );
  }
  