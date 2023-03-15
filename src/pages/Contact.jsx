import React from 'react'
import { Form } from 'react-router-dom'

export default function Contact() {
  const contact = {
    firstName: 'Your',
    lastName: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'Your handler',
    notes: 'Notes',
    favorite: true
  }

  return(
    <div id="contact">
      <div>
        <img 
        key={contact.avatar}
        src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {
            contact.firstName || contact.lastName ? (
              <>
              {contact.firstName} {contact.lastName}
              </>
            ) : (
              <i>No name</i>
            )
          }{" "}
          <favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
            target="_blank"
            href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
          method="post"
          action="destroy"
          onSubmit={(e)=>{
            if (!confirm('Please confirm you want to delete this record')) {
              e.preventDefault()
            }
          }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}

function favorite({contact}) {
  let favorite = contact.favorite
  return(
    <Form method="post">
      <button
      name="favorite"
      value={favorite ? 'false' : 'true'}
      aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  )
}