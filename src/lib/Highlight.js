import dynamic from 'next/dynamic'

const DynamicJsonViwer = dynamic(
    import('react-json-view'),
    {
      ssr: false   //这个要加上,禁止使用 SSR
    }
  )
  
  export default () => <DynamicJsonViwer />