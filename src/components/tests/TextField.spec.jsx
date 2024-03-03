import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한  css class가 적용된다.', async () => {
  // Arrage - 테스트를 위한 환경 만들기
  // -> className을 지닌 컴포넌트 렌더링
  // Act - 테스트 할 동작 발생
  // -> 렌더링에 대한 검증이기 때문에 이 단계는 생략
  // -> 클릭이나 메서드 호출, prop 변경 등에 대한 작업이 해당됨
  // Assert - 올바른 동작이 실행되었는지 검증
  // -> 렌더링 후 DOM에 해당 class가 존재하는지 검증

  // render API 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링된 DOM구조가 반영됨
  // jsDOM: Node.js에서 사용하기 위해 많은 웹 표준을 순수 자바스크립트로 구현한 것

  // vitest의 expect 함수를 사용하여 기대 결과를 검증

  // className이란 내부 prop이나 state 값을 검증 (X)
  // 렌더링 되는 DOM 구조가 올바르게 변경되었는지 확인 (O) -> 최종적으로 사용자가 보는 결과는 DOM
  await render(<TextField className="my-class" />);

  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});

// it -> test 함수의  alias
// it'('should ~~~~')
// test'('if ~~~~')

describe('placeholder', () => {
  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    //  기대결과 === 기대 결과 -> 성공
    // 기대결과 !== 실제 결과 -> 실패
    await render(<TextField className="my-class" />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
    screen.debug();
    expect(textInput).toBeInTheDocument();
    // 단언(assertion) -> 테스트 통과하기 위한 조건 -> 검증 실행
    // matcher:  기대 결과를 검증하기 위해 사용하는 일종의 api 집합
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);
    const textInput = screen.getByPlaceholderText('상품명을 입력해 주세요.');
    expect(textInput).toBeInTheDocument();
  });
});
