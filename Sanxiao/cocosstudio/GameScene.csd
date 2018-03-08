<GameFile>
  <PropertyGroup Name="GameScene" Type="Scene" ID="a2ee0952-26b5-49ae-8bf9-4f1d6279b798" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" ActivedAnimationName="animation0" />
      <AnimationList>
        <AnimationInfo Name="animation0" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="240" G="248" B="255" />
        </AnimationInfo>
        <AnimationInfo Name="animation1" StartIndex="0" EndIndex="50">
          <RenderColor A="255" R="144" G="238" B="144" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Scene" ctype="GameNodeObjectData">
        <Size X="640.0000" Y="960.0000" />
        <Children>
          <AbstractNodeData Name="back_ground" ActionTag="327697861" Tag="8" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="1.9200" RightMargin="-1.9200" TopMargin="-72.0000" ctype="SpriteObjectData">
            <Size X="640.0000" Y="1032.0000" />
            <AnchorPoint ScaleX="0.5000" />
            <Position X="321.9200" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5030" />
            <PreSize X="1.0000" Y="1.0750" />
            <FileData Type="Normal" Path="media/bg/back_ground.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="bottom_box" ActionTag="1949819110" Tag="115" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="820.0000" ctype="SpriteObjectData">
            <Size X="640.0000" Y="140.0000" />
            <Children>
              <AbstractNodeData Name="btn_back" ActionTag="1382840780" Tag="130" IconVisible="False" LeftMargin="262.4911" RightMargin="256.5089" TopMargin="38.1344" BottomMargin="-22.1344" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="91" Scale9Height="102" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="121.0000" Y="124.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="322.9911" Y="39.8656" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5047" Y="0.2848" />
                <PreSize X="0.1891" Y="0.8857" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="media/game/battle_bt_back.png" Plist="" />
                <PressedFileData Type="Normal" Path="media/game/battle_bt_back.png" Plist="" />
                <NormalFileData Type="Normal" Path="media/game/battle_bt_back.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" />
            <Position X="320.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" />
            <PreSize X="1.0000" Y="0.1458" />
            <FileData Type="Normal" Path="media/game/battle_down_back.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="top_box" ActionTag="-2104234044" Tag="116" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" BottomMargin="824.0000" ctype="SpriteObjectData">
            <Size X="640.0000" Y="136.0000" />
            <Children>
              <AbstractNodeData Name="img_score" ActionTag="314685739" Tag="117" IconVisible="False" LeftMargin="393.6497" RightMargin="100.3503" TopMargin="-6.8088" BottomMargin="69.8088" ctype="SpriteObjectData">
                <Size X="146.0000" Y="73.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="466.6497" Y="106.3088" />
                <Scale ScaleX="0.6000" ScaleY="0.6100" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7291" Y="0.7817" />
                <PreSize X="0.2281" Y="0.5368" />
                <FileData Type="Normal" Path="media/game/battle_cross_score.png" Plist="" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
              <AbstractNodeData Name="text_score" ActionTag="1889051132" Tag="57" IconVisible="False" LeftMargin="394.0811" RightMargin="111.9189" TopMargin="47.8948" BottomMargin="43.1052" FontSize="40" LabelText="999999" HorizontalAlignmentType="HT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="134.0000" Y="45.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="461.0811" Y="88.1052" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7204" Y="0.6478" />
                <PreSize X="0.2094" Y="0.3309" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="btn_start" ActionTag="933342636" Tag="55" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="550.6984" RightMargin="-1.6984" TopMargin="6.7752" BottomMargin="39.2248" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="61" Scale9Height="68" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="91.0000" Y="90.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="596.1984" Y="84.2248" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9316" Y="0.6193" />
                <PreSize X="0.1422" Y="0.6618" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="media/game/battle_bt_start.png" Plist="" />
                <PressedFileData Type="Normal" Path="media/game/battle_bt_start.png" Plist="" />
                <NormalFileData Type="Normal" Path="media/game/battle_bt_start.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="btn_stop" ActionTag="1097311916" Tag="56" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="547.4243" RightMargin="1.5757" TopMargin="0.8728" BottomMargin="45.1272" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="61" Scale9Height="68" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="91.0000" Y="90.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="592.9243" Y="90.1272" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9264" Y="0.6627" />
                <PreSize X="0.1422" Y="0.6618" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="Normal" Path="media/game/battle_bt_pause.png" Plist="" />
                <PressedFileData Type="Normal" Path="media/game/battle_bt_pause.png" Plist="" />
                <NormalFileData Type="Normal" Path="media/game/battle_bt_pause.png" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="Text_1" ActionTag="-94477236" Tag="60" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="277.2000" RightMargin="302.8000" TopMargin="11.2336" BottomMargin="90.7664" FontSize="30" LabelText="步数" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="60.0000" Y="34.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="307.2000" Y="124.7664" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4800" Y="0.9174" />
                <PreSize X="0.0938" Y="0.2500" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="lab_stepnum" ActionTag="-1156063265" Tag="61" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="284.1320" RightMargin="304.8680" TopMargin="47.6680" BottomMargin="54.3320" FontSize="30" LabelText="999" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="51.0000" Y="34.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="309.6320" Y="88.3320" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4838" Y="0.6495" />
                <PreSize X="0.0797" Y="0.2500" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
            <Position X="320.0000" Y="960.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="1.0000" />
            <PreSize X="1.0000" Y="0.1417" />
            <FileData Type="Normal" Path="media/game/battle_top_back.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="tileMap" ActionTag="809772974" Tag="143" IconVisible="False" LeftMargin="1.9991" RightMargin="-1.9991" TopMargin="103.0000" BottomMargin="137.0000" ctype="GameMapObjectData">
            <Size X="640.0000" Y="720.0000" />
            <AnchorPoint />
            <Position X="1.9991" Y="137.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.0031" Y="0.1427" />
            <PreSize X="1.0000" Y="0.7500" />
            <FileData Type="Normal" Path="media/titleMap/1.tmx" Plist="" />
          </AbstractNodeData>
          <AbstractNodeData Name="Panel_touch" ActionTag="-1799235626" Tag="29" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="-1.0000" RightMargin="1.0000" TopMargin="164.0000" BottomMargin="-68.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="0" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="864.0000" />
            <AnchorPoint />
            <Position X="-1.0000" Y="-68.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="-0.0016" Y="-0.0708" />
            <PreSize X="1.0000" Y="0.9000" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>