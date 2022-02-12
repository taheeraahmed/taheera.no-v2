import React from 'react'

const Icon = ({icon, link}) => {
  return (
    <a
              href="https://www.tiktok.com/@taheera.py"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <icon
                  fontSize="large"
                  style={{ color: themeContext.white }}
                />
              </IconButton>
            </a>
  )
}

export default Icon