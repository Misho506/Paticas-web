import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type TextTruncatorProps = {
  text: string;
}

const TextTruncator = ({ text }: TextTruncatorProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState('');
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const fullTextRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Función para truncar el texto a aproximadamente 3 líneas
    const truncateText = () => {
      if (!text) return;

      // Primero, establecemos el texto completo para medir
      const tempDiv = document.createElement('div');
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.position = 'absolute';
      tempDiv.style.width = fullTextRef.current ? getComputedStyle(fullTextRef.current).width : '100%';
      tempDiv.style.fontSize = '16px';
      tempDiv.style.lineHeight = '1.5';
      tempDiv.innerHTML = text;
      document.body.appendChild(tempDiv);

      // Estimamos cuántos caracteres caben en 3 líneas
      const lineHeight = 24; // 16px * 1.5
      const threeLines = lineHeight * 3;

      if (tempDiv.clientHeight <= threeLines) {
        // No necesita truncamiento
        setTruncatedText(text);
        setNeedsTruncation(false);
      } else {
        // Necesita truncamiento - calculemos aproximadamente
        const charsPerLine = Math.floor(text.length / (tempDiv.clientHeight / lineHeight));
        const estCharsFor3Lines = Math.floor(charsPerLine * 3 * 0.85); // 0.85 factor de seguridad

        const truncated = text.substring(0, estCharsFor3Lines) + '...';
        setTruncatedText(truncated);
        setNeedsTruncation(true);
      }

      document.body.removeChild(tempDiv);
    };

    truncateText();

    // Re-truncar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', truncateText);
    return () => window.removeEventListener('resize', truncateText);
  }, [text]);

  return (
    <div ref={fullTextRef}>
      <p className="text-gray-600 italic">{isExpanded ? text : truncatedText}</p>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 font-bold"
        >
          {isExpanded ? i18n.t("readLess") : i18n.t("readMore")}
        </button>
      )}
    </div>
  );
}

export default TextTruncator;
