

function Cards(props) {
  return (
    <div style={{display : (props.show)? "block" : "none"  }}>
        <h1>
            {props.title}
        </h1>

        <p>
           {props.des}
        </p>
    </div>

  )
}

export default Cards