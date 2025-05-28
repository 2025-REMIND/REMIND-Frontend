import React, { useRef, useState, useEffect } from 'react';
import * as S from './ChatInput.style';
import { FiImage, FiSend, FiX } from 'react-icons/fi';

const ChatInput = ({ input, setInput, onSend, setImageFile }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSend();
      setPreviewUrl(null); // 전송 후 미리보기 제거 (선택)
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    fileInputRef.current.value = null;
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
  <S.InputWrapper>
  {/* ✅ 위쪽 미리보기 이미지 */}
  {previewUrl && (
    <S.ImagePreviewBox>
      <img src={previewUrl} alt="미리보기" />
      <S.RemoveImageButton onClick={handleRemoveImage}>
        <FiX />
      </S.RemoveImageButton>
    </S.ImagePreviewBox>
  )}

  {/* ✅ 입력창 + 버튼을 한 줄로 수평 배치 */}
  <S.RowContainer>
    <S.InputBox>
      <S.ImageButton onClick={handleImageClick}>
        <FiImage />
      </S.ImageButton>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <S.Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="RIMI와 대화를 시작해보세요!"
        onKeyDown={handleKeyDown}
      />
    </S.InputBox>

    <S.SendButton onClick={onSend}>
      <FiSend />
    </S.SendButton>
  </S.RowContainer>
</S.InputWrapper>

);

};

export default ChatInput;
