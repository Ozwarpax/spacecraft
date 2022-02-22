import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { Button, Card, Paragraph, Title } from 'react-native-paper'

interface IPropsItem  {
    name:string
    model:string
    manufacturer:string
    cost_in_credits:string
}

const CardItem = (props: IPropsItem) => {
    
  return (

    <Card style={styles.card}>
            <Card.Title title={props.name} subtitle={props.model} />
            <Card.Content>
                <Paragraph>{props.manufacturer}</Paragraph>
                <Title>{props.cost_in_credits} Credits</Title>
            </Card.Content>
            <Card.Actions>
                <Button>BUY THIS SPACESHIP</Button>
            </Card.Actions>
        </Card>
  )
}

export default CardItem


const styles = StyleSheet.create({
    card: {
        height: 200,
        margin: 20
    },
    name: {
        fontWeight: "bold",
        fontSize: 24
    },
    buy: {
        fontSize: 18,
        fontWeight: "bold",
       
    }
})