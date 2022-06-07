import { Placement } from '@popperjs/core';
import useInterval from 'lib/utils/useInterval';
import React, { useCallback, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

const PopoverContainer = styled.div<{ show: boolean }>`
  z-index: 9999;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: visibility 150ms linear, opacity 150ms linear;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: 8px;
`;

const ReferenceElement = styled.div`
  display: inline-block;
`;

export interface PopoverProps {
  content: React.ReactNode;
  show: boolean;
  children: React.ReactNode;
  placement?: Placement;
}

export default function Popover({ content, show, children, placement = 'auto' }: PopoverProps) {
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, update, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    strategy: 'fixed',
    modifiers: [
      { name: 'offset', options: { offset: [8, 8] } },
      { name: 'arrow', options: { element: arrowElement } },
    ],
  });
  const updateCallback = useCallback(() => {
    if (update) {
      update();
    }
  }, [update]);
  useInterval(updateCallback, show ? 100 : null);

  return (
    <>
      <ReferenceElement ref={setReferenceElement as any}>{children}</ReferenceElement>
      <PopoverContainer
        show={show}
        ref={setPopperElement as any}
        style={styles.popper}
        {...attributes.popper}
      >
        {content}
      </PopoverContainer>
    </>
  );
}
