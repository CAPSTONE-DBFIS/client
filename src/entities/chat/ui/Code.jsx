import SyntaxHighlighter from 'react-syntax-highlighter'

export const CustomCode = ({
    className,
    children,
    ...props
}) => {
    const isInline = !className
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const textToCopy = Array.isArray(children)
            ? children.join('')
            : (children)

        navigator.clipboard.writeText(textToCopy.trim())
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    if (isInline) {
        return (
            <code
                style={{
                    backgroundColor: '#f5f5f5',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                }}
                {...props}
            >
                {children}
            </code>
        )
    }

    const language = className?.replace('language-', '') || 'text'
    const codeString = Array.isArray(children)
        ? children.join('')
        : (children)
    
    return (
        <div style={{ position: 'relative' }}>
            <SyntaxHighlighter language={language} style={materialOceanic}>
                {codeString}
            </SyntaxHighlighter>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: '#333',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    cursor: 'pointer',
                }}
            >
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}