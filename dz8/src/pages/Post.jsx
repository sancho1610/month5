import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Post() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)

  if (!post) {
    return (
      <div>
        <h1>Пост не найден</h1>
        <button onClick={() => navigate('/posts')}>Вернуться к списку постов</button>
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate('/posts')}>Вернуться к списку постов</button>
    </div>
  )
}