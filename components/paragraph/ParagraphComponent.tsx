/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ParagraphComponentFragment } from '../../lib/generated/graphql'
import { isEmptyTextChunk, TextChunkComponent } from './TextChunkComponent'

interface ParagraphProps {
  fragment: ParagraphComponentFragment
}

export const createParagraph = (text: string): ParagraphComponentFragment => {
  return {
    __typename: 'Paragraph',
    chunks: [
      {
        __typename: 'TextChunk',
        text: text,
      },
    ],
  }
}

export const isEmptyParagraph = (
  fragment: ParagraphComponentFragment
): boolean => {
  if (!fragment.chunks) {
    return false
  } else {
    const isAnyChunkContentful = fragment.chunks
      .map(isEmptyTextChunk)
      .includes(false) //see if any `isEmptyTextChunk == false`

    const isEveryChunkEmpty = !isAnyChunkContentful

    return isEveryChunkEmpty
  }
}

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks || isEmptyParagraph(fragment)) {
    return <></>
  } else {
    return (
      <p
        css={css`
          color: #0a0a0a;
          margin: 0px;
        `}
        contentEditable={false}
      >
        {fragment.chunks.map((chunk, index) =>
          chunk ? <TextChunkComponent key={index} fragment={chunk} /> : <></>
        )}
      </p>
    )
  }
}

ParagraphComponent.fragment = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragment}
`
