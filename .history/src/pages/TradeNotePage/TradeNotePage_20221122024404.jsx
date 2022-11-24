import React from 'react';

export default function TradeNotePage() {
  return (
    <>
      <header>
        <IconBtn
          handleClick={() => {
            setForm({
              title: '',
              description: '',
              dealType: 'trade',
              price: '',
              images: [],
            });
            prevImageClear();
            onMakeActiveHandler();
          }}
        >
          <GrClose />
        </IconBtn>
        <h1 className={styles.htitle}>장터 등록하기</h1>
        <TextBtn text={'등록하기'} handleClick={submit} />
      </header>
    </>
  );
}
