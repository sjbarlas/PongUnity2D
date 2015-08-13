﻿/* STORE WHAT KEYS WE WANT TO PRESS IN ORDER FOR PLAYERS TO 
MOVE UP AND DOWN AND ITS VARIABLES

HANDY > NEED 2 PLAYERS SET OF CONTROLS

WE DON'T WANT TO MANAGE INPUT CONTROLS OR CREATE SEVERAL SCRIPTS
FOR THAT. INSTEAD WE CAN STORE AS A VARIABLE */

#pragma strict

var moveUp : KeyCode; // FOR KEYS
var moveDown : KeyCode;

var speed : float = 10;

function Update () 
{
	// CHECK FOR INPUT
	
	if (Input.GetKey(moveUp))
	{
		/* RIGIDBODY2D ON A SPRITE PUTS IT UNDER THE CONTROL OF THE PHYSICS ENGINE
		THIS MEANS: SPRITE WILL BE AFFECTED BY GRAVITY AND CAN BE COTROLLED FROM SCRIPTS USING FORCES */
		
		rigidbody2D.velocity.y = speed; // Y AXIS IS UP AND DOWN IE. VERTICAL
	}
	
	else if (Input.GetKey(moveDown))
	{
		/* MULTIPLYING BY 1, WE'VE REVERSED THE 
		VARIABLE SPEED THUS THE OBJECT MOVES DOWNWARDS */
		
		rigidbody2D.velocity.y = speed *-1; // REVERSED THE DIRECTION
	}
	
	else
	{
		// OBJECT WON'T MOVE
		
		rigidbody2D.velocity.y = 0;
	}
	
	// PLAYERS WILL STAY IN PLACE AND WILL NOT BE PUSHED BY THE BALL
	// X velocity IS 0
	
	rigidbody2D.velocity.x = 0;
}