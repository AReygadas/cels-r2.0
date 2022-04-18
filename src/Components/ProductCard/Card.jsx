import React, { useEffect } from "react";
import "./style.css";
import $ from "jquery";
import VidU from "../../Images/CardU.mp4";
import VidA from "../../Images/CardAdventures.mp4";
import VidUs from "../../Images/CardUS.mp4";
import VidTV from "../../Images/CardTV.mp4";
import { ButtonCard, T1, T2 } from "./styles";
import {IoArrowRedoOutline} from 'react-icons/io5'

export const Card = () => {
  useEffect(() => {
    var x;
    var $cards = $(".cardx");
    var $style = $(".hover");

    $cards
      .on("mousemove touchmove", function (e) {
        // normalise touch/mouse
        var pos = [e.offsetX, e.offsetY];
        e.preventDefault();
        if (e.type === "touchmove") {
          pos = [e.touches[0].clientX, e.touches[0].clientY];
        }
        var $card = $(this);
        // math for mouse position
        var l = pos[0];
        var t = pos[1];
        var h = $card.height();
        var w = $card.width();
        var px = Math.abs(Math.floor((100 / w) * l) - 100);
        var py = Math.abs(Math.floor((100 / h) * t) - 100);
        var pa = 50 - px + (50 - py);
        // math for gradient / background positions
        var lp = 50 + (px - 50) / 1.5;
        var tp = 50 + (py - 50) / 1.5;
        var px_spark = 50 + (px - 50) / 7;
        var py_spark = 50 + (py - 50) / 7;
        var p_opc = 20 + Math.abs(pa) * 1.5;
        var ty = ((tp - 50) / 2) * -1;
        var tx = ((lp - 50) / 1.5) * 0.5;
        // css to apply for active card
        var grad_pos = `background-position: ${lp}% ${tp}%;`;
        var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
        var opc = `opacity: ${p_opc / 100};`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        // need to use a <style> tag for psuedo elements
        var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `;
        // set / apply css class and style
        $cards.removeClass("active");
        $card.removeClass("animated");
        $card.attr("style", tf);
        $style.html(style);
        if (e.type === "touchmove") {
          return false;
        }
        clearTimeout(x);
      })
      .on("mouseout touchend touchcancel", function () {
        // remove css, apply custom animation on end
        var $card = $(this);
        $style.html("");
        $card.removeAttr("style");
        x = setTimeout(function () {
          $card.addClass("animated");
        }, 2500);
      });
  });

  return (
    
    <div className="cardsx">
      <div className="cardx charizard animated">
        <video  loop autoPlay muted height="100%"  style={{borderRadius:'15px'}}>
          <source src={VidU} />
        </video>
        <div style={{marginTop:'-190px', textAlign:'center', color:'#fff'}}>
          <T1>CELS U</T1>
          <T2>ENGLISH UNIVERSITY</T2>
       
          <ButtonCard>Ver Mas <IoArrowRedoOutline /></ButtonCard>
        </div>
      </div>

      <div className="cardx  animated">
        <video loop autoPlay muted height="100%" style={{borderRadius:'15px'}}>
          <source src={VidA} />
        </video>
        <br/>
        <br/>
        <div style={{marginTop:'-190px', textAlign:'center', color:'#fff'}}>
          <T1>ADVENTURES</T1>
          <T2>VIVE TU AVENTURA</T2>
       
          <ButtonCard>Ver Mas <IoArrowRedoOutline /></ButtonCard>
        </div>
      </div>

      <div className="cardx  animated">
        <video loop autoPlay muted height="100%" style={{borderRadius:'15px'}}>
          <source src={VidUs} />
        </video>
        <div style={{marginTop:'-190px', textAlign:'center', color:'#fff'}}>
          <T1>CELS US</T1>
          <T2>THE BETTER PATH TO CITIZENSHIP</T2>
       
          <ButtonCard>Ver Mas <IoArrowRedoOutline /></ButtonCard>
        </div>
      </div>

      <div className="cardx  animated">
        <video loop autoPlay muted height="100%" style={{borderRadius:'15px'}}>
          <source src={VidTV} />
        </video>
        <div style={{marginTop:'-190px', textAlign:'center', color:'#fff'}}>
          <T1>CELS TV</T1>
          <T2>ENGLISH FOR OUR GENERATION</T2>
       
          <ButtonCard>Ver Mas <IoArrowRedoOutline /></ButtonCard>
        </div>
      </div>

    </div>
  );
};
