<GameFile>
  <PropertyGroup Name="MainScene" Type="Scene" ID="a2ee0952-26b5-49ae-8bf9-4f1d6279b798" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="animation0">
        <Timeline ActionTag="1259965370" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.1000" Y="1.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
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
          <AbstractNodeData Name="back_ground" ActionTag="327697861" Tag="8" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" ctype="SpriteObjectData">
            <Size X="640.0000" Y="960.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="480.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
            <FileData Type="Normal" Path="media/bg/battle_tips_bg3.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="music_bt_on_4" ActionTag="993434947" VisibleForFrame="False" Tag="6" IconVisible="False" LeftMargin="384.9543" RightMargin="209.0457" TopMargin="46.0007" BottomMargin="867.9993" ctype="SpriteObjectData">
            <Size X="46.0000" Y="46.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="407.9543" Y="890.9993" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.6374" Y="0.9281" />
            <PreSize X="0.0719" Y="0.0479" />
            <FileData Type="Default" Path="Default/Sprite.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="btn_start" ActionTag="1259965370" Tag="11" IconVisible="False" LeftMargin="166.7577" RightMargin="210.2423" TopMargin="668.9566" BottomMargin="25.0434" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="233" Scale9Height="244" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
            <Size X="263.0000" Y="266.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="298.2577" Y="158.0434" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.4660" Y="0.1646" />
            <PreSize X="0.4109" Y="0.2771" />
            <TextColor A="255" R="65" G="65" B="70" />
            <DisabledFileData Type="Normal" Path="media/menu/menu_play.png" Plist="" />
            <PressedFileData Type="Normal" Path="media/menu/menu_play.png" Plist="" />
            <NormalFileData Type="Normal" Path="media/menu/menu_play.png" Plist="" />
            <OutlineColor A="255" R="255" G="0" B="0" />
            <ShadowColor A="255" R="110" G="110" B="110" />
          </AbstractNodeData>
          <AbstractNodeData Name="sound_bt_on_5" ActionTag="1181223992" VisibleForFrame="False" Tag="7" IconVisible="False" LeftMargin="505.0784" RightMargin="88.9216" TopMargin="45.7586" BottomMargin="868.2414" ctype="SpriteObjectData">
            <Size X="46.0000" Y="46.0000" />
            <AnchorPoint ScaleX="0.3346" ScaleY="0.4007" />
            <Position X="520.4700" Y="886.6736" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.8132" Y="0.9236" />
            <PreSize X="0.0719" Y="0.0479" />
            <FileData Type="Default" Path="Default/Sprite.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="menu_bridge_5" ActionTag="-500100441" Tag="26" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" BottomMargin="343.0000" ctype="SpriteObjectData">
            <Size X="640.0000" Y="617.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
            <Position X="320.0000" Y="960.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="1.0000" />
            <PreSize X="1.0000" Y="0.6427" />
            <FileData Type="Normal" Path="media/menu/menu_bridge.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="logo_7" ActionTag="-1419532981" Tag="10" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="36.9609" RightMargin="3.0391" TopMargin="217.6246" BottomMargin="536.3754" ctype="SpriteObjectData">
            <Size X="600.0000" Y="206.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="336.9609" Y="639.3754" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5265" Y="0.6660" />
            <PreSize X="0.9375" Y="0.2146" />
            <FileData Type="Normal" Path="media/menu/logo.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="menu_cloud1_6" ActionTag="-909649888" Tag="27" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="239.2760" BottomMargin="375.7240" ctype="SpriteObjectData">
            <Size X="640.0000" Y="345.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="548.2240" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5711" />
            <PreSize X="1.0000" Y="0.3594" />
            <FileData Type="Normal" Path="media/menu/menu_cloud1.png" Plist="" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>