import { imageUrl } from '@/shared/helpers/image-url'
import Image from 'next/image'
import React, { FC } from 'react'
import { Game } from '../../types'

type CardProps = Pick<Game, "title" | "provider" | "categories" | "identifier">

export const Card: FC<CardProps> = ({ title, provider, categories, identifier }) => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-2">Provider: {provider}</p>
      <p className="text-lg mb-2">Categories: {categories.join(', ')}</p>
      <Image src={imageUrl(identifier)} width={500}
        height={500} alt={title} className="w-full h-auto rounded-lg shadow-lg mt-4" />
    </div>
  )
}
