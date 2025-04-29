export default function getData({ oldData }) {
  const tailwindPlugin = {
    id: 'tailwind',
    importer: "import tailwindcss from '@tailwindcss/vite'",
    initializer: 'tailwindcss()',
  };

  const plugins = Array.isArray(oldData.plugins) ? oldData.plugins : [];
  return {
    ...oldData,
    plugins: [...plugins, tailwindPlugin],
  };
}