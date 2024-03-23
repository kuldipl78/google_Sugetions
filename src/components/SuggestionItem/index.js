import React from 'react'

import './index.css'

const SuggestionItem = ({onSuggetionClick, suggestion}) => {
  return (
    <li className="list-Container">
      <button
        className="btn-element"
        onClick={() => onSuggetionClick(suggestion)}
      >
        {suggestion}
      </button>
    </li>
  )
}

export default SuggestionItem
