import React from "react";

const links = [
  {
    linkName : 'Twitter Link',
    linkId: 'my_twitter',
    linkUrl: 'https://twitter.com/theZuriTeam',
  },
  {
    linkName : 'Zuri Team',
    linkId: 'btn__zuri',
    linkUrl: 'https://training.zuri.team/',
  },
  {
    linkName : 'Zuri Books',
    linkId: 'books',
    linkUrl: 'https://books.zuri.team',
  },
  {
    linkName : 'Python Books',
    linkId: 'btn__python',
    linkUrl: 'https://books.zuri.team/python-for-beginners?ref_id=Frankenstylz',
  },
  {
    linkName : 'Background Check for Coders',
    linkId: 'pitch',
    linkUrl: 'https://backgroundcheck.zuri.team',
  },
  {
    linkName : 'Design Books',
    linkId: 'book__design',
    linkUrl: 'https://books.zuri.team/design-rules',
  },
  {
    linkName : 'Contact Me',
    linkId: 'contact',
    linkUrl: '/contact',
  }
]

const LinkButton = () => {
  return (
    <div className="link_section">
      {
        links.map((link, i) => {
          return (
            <a href={link.linkUrl} id={link.linkId} key={i} rel="noreferrer" >{link.linkName}</a>
          )
        })
      }
    </div>
  )
}

export default LinkButton;