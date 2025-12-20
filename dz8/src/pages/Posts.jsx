import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <div>
      <h1>Список постов</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}