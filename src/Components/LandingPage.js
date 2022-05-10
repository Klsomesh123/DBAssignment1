import React from 'react'
import './LandingPage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function LandingPage () {
    return (
	<div className='LandingPage_LandingPage'>
		<div className='SEARCH'>
			<div className='RoundedRectangle3'>
				<img className='Vector' src = {ImgAsset.LandingPage_Vector} />
				<img className='Vector_1' src = {ImgAsset.LandingPage_Vector_1} />
			</div>
			<img className='RoundedRectangle3copy' src = {ImgAsset.LandingPage_RoundedRectangle3copy} />
			<span className='Search'>Search</span>
			<span className='Searchquery'>Search query...</span>
		</div>
		<div className='NEWS'>
			<span className='LATESTNEWS'>LATEST NEWS</span>
		</div>
		<div className='OfferBanner'>
			<img className='PromotionImage' src = {ImgAsset.LandingPage_PromotionImage} />
			<span className='Title'>Super Flash Sale
			50% Off</span>
		</div>
		<div className='BANNERS'>
			<div className='banner'>
				<img className='base' src = {ImgAsset.LandingPage_base} />
				<img className='imageProduct' src = {ImgAsset.LandingPage_imageProduct} />
				<div className='pic'>
					<img className='iPhone6s_discover_desktop_08_iOS9' src = {ImgAsset.LandingPage_iPhone6s_discover_desktop_08_iOS9} />
				</div>
				<span className='FSQUILTEDMAXICROSSBAG'>FS - QUILTED MAXI CROSS BAG</span>
				<span className='_29943'>$299,43</span>
				<div className='Discount'>
					<span className='_53433'>$534,33</span>
					<span className='_24Off'>24% Off</span>
				</div>
			</div>
			<div className='banner_1'>
				<img className='base_1' src = {ImgAsset.LandingPage_base_1} />
			</div>
			<div className='banner_2'>
				<img className='Rectangle1copy3' src = {ImgAsset.LandingPage_Rectangle1copy3} />
				<img className='OculusRiftprofile_grande' src = {ImgAsset.LandingPage_OculusRiftprofile_grande} />
			</div>
		</div>
		<img className='imageProduct_1' src = {ImgAsset.LandingPage_imageProduct_1} />
		<img className='imageProduct_2' src = {ImgAsset.LandingPage_imageProduct_2} />
		<div className='BESTSELLERS'>
			<div className='Itemsgrid'>
				<div className='item'>
					<div className='Rectangle1copy5'>
						<img className='Vector_2' src = {ImgAsset.LandingPage_Vector_2} />
						<img className='Vector_3' src = {ImgAsset.LandingPage_Vector_3} />
					</div>
					<img className='Rectangle1copy18' src = {ImgAsset.LandingPage_Rectangle1copy18} />
					<div className='rate'>
						<img className='star' src = {ImgAsset.LandingPage_star} />
						<img className='starcopy3' src = {ImgAsset.LandingPage_starcopy3} />
						<img className='starcopy4' src = {ImgAsset.LandingPage_starcopy4} />
						<img className='starcopy' src = {ImgAsset.LandingPage_starcopy} />
						<img className='starcopy2' src = {ImgAsset.LandingPage_starcopy2} />
					</div>
					<div className='rate_1'>
						<img className='star_1' src = {ImgAsset.LandingPage_star_1} />
						<img className='starcopy3_1' src = {ImgAsset.LandingPage_starcopy3_1} />
						<img className='starcopy4_1' src = {ImgAsset.LandingPage_starcopy4_1} />
						<img className='starcopy_1' src = {ImgAsset.LandingPage_starcopy_1} />
						<img className='starcopy2_1' src = {ImgAsset.LandingPage_starcopy2_1} />
					</div>
					<div className='rate_2'>
						<img className='star_2' src = {ImgAsset.LandingPage_star_2} />
						<img className='starcopy3_2' src = {ImgAsset.LandingPage_starcopy3_2} />
						<img className='starcopy4_2' src = {ImgAsset.LandingPage_starcopy4_2} />
						<img className='starcopy_2' src = {ImgAsset.LandingPage_starcopy_2} />
						<img className='starcopy2_2' src = {ImgAsset.LandingPage_starcopy2_2} />
					</div>
					<img className='_50061505_575246' src = {ImgAsset.LandingPage__50061505_575246} />
				</div>
				<div className='item_1'>
					<div className='Rectangle1copy5_1'>
						<img className='Vector_4' src = {ImgAsset.LandingPage_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.LandingPage_Vector_5} />
					</div>
					<img className='Rectangle1copy18_1' src = {ImgAsset.LandingPage_Rectangle1copy18_1} />
					<img className='_50061505_575246_1' src = {ImgAsset.LandingPage__50061505_575246_1} />
				</div>
				<div className='item_2'>
					<div className='Rectangle1copy5_2'>
						<img className='Vector_6' src = {ImgAsset.LandingPage_Vector_6} />
						<img className='Vector_7' src = {ImgAsset.LandingPage_Vector_7} />
					</div>
					<img className='Rectangle1copy18_2' src = {ImgAsset.LandingPage_Rectangle1copy18_2} />
					<img className='_50061505_575246_2' src = {ImgAsset.LandingPage__50061505_575246_2} />
				</div>
				<div className='item_3'>
					<div className='Rectangle1copy5_3'>
						<img className='Vector_8' src = {ImgAsset.LandingPage_Vector_8} />
						<img className='Vector_9' src = {ImgAsset.LandingPage_Vector_9} />
					</div>
					<img className='Rectangle1copy18_3' src = {ImgAsset.LandingPage_Rectangle1copy18_3} />
					<img className='_50061505_575246_3' src = {ImgAsset.LandingPage__50061505_575246} />
				</div>
				<div className='item_4'>
					<div className='Rectangle1copy5_4'>
						<img className='Vector_10' src = {ImgAsset.LandingPage_Vector_10} />
						<img className='Vector_11' src = {ImgAsset.LandingPage_Vector_11} />
					</div>
					<img className='Rectangle1copy18_4' src = {ImgAsset.LandingPage_Rectangle1copy18_4} />
					<img className='_50061505_575246_4' src = {ImgAsset.LandingPage__50061505_575246_4} />
				</div>
				<div className='item_5'>
					<div className='Rectangle1copy5_5'>
						<img className='Vector_12' src = {ImgAsset.LandingPage_Vector_12} />
						<img className='Vector_13' src = {ImgAsset.LandingPage_Vector_13} />
					</div>
					<img className='Rectangle1copy18_5' src = {ImgAsset.LandingPage_Rectangle1copy18_5} />
					<img className='_50061505_575246_5' src = {ImgAsset.LandingPage__50061505_575246_5} />
				</div>
				<div className='item_6'>
					<div className='Rectangle1copy5_6'>
						<img className='Vector_14' src = {ImgAsset.LandingPage_Vector_14} />
						<img className='Vector_15' src = {ImgAsset.LandingPage_Vector_15} />
					</div>
					<img className='Rectangle1copy18_6' src = {ImgAsset.LandingPage_Rectangle1copy18_6} />
					<img className='_50061505_575246_6' src = {ImgAsset.LandingPage__50061505_575246_6} />
				</div>
				<div className='item_7'>
					<div className='Rectangle1copy5_7'>
						<img className='Vector_16' src = {ImgAsset.LandingPage_Vector_16} />
						<img className='Vector_17' src = {ImgAsset.LandingPage_Vector_17} />
					</div>
					<img className='Rectangle1copy18_7' src = {ImgAsset.LandingPage_Rectangle1copy18_7} />
					<img className='_50061505_575246_7' src = {ImgAsset.LandingPage__50061505_575246_7} />
				</div>
			</div>
			<span className='BESTSELLER'>BEST SELLER</span>
			<div className='Tabs'>
				<span className='AllBagsSneakersBeltSunglasses'>All            Bags            Sneakers            Belt            Sunglasses            </span>
				<img className='underline' src = {ImgAsset.LandingPage_underline} />
			</div>
			<div className='link'>
				<span className='LOADMORE'>LOAD MORE</span>
				<img className='Rectangle14' src = {ImgAsset.LandingPage_Rectangle14} />
			</div>
		</div>
		<div className='BANNER'>
			<img className='Rectangle1copy10' src = {ImgAsset.LandingPage_Rectangle1copy10} />
			<img className='Rectangle1copy19' src = {ImgAsset.LandingPage_Rectangle1copy19} />
			<div className='Content'>
				<span className='AdidasMenRunningSneakers'>Adidas Men Running
				Sneakers</span>
				<span className='PerformanceanddesignTakenrighttotheedge'>Performance and design. Taken right to the edge.</span>
				<div className='link_1'>
					<span className='SHOPNOW'>SHOP NOW</span>
					<img className='Rectangle14_1' src = {ImgAsset.LandingPage_Rectangle14_1} />
				</div>
			</div>
			<div className='pic_1'>
				<img className='iPhone6s_discover_desktop_08_iOS9_1' src = {ImgAsset.LandingPage_iPhone6s_discover_desktop_08_iOS9} />
			</div>
		</div>
		<div className='WHYUS'>
			<div className='Group14'>
				<span className='_100REFUND'>100% REFUND</span>
				<div className='refund'>
					<div className='Group12'>
						<div className='Group11'>
							<img className='Path1' src = {ImgAsset.LandingPage_Path1} />
							<img className='Path2' src = {ImgAsset.LandingPage_Path2} />
						</div>
					</div>
				</div>
			</div>
			<div className='Group15'>
				<span className='SUPPORT247'>SUPPORT 24/7</span>
				<div className='support'>
					<img className='Path3' src = {ImgAsset.LandingPage_Path3} />
					<img className='Path4' src = {ImgAsset.LandingPage_Path4} />
				</div>
			</div>
			<div className='Group13'>
				<span className='FREESHIPPING'>FREE SHIPPING</span>
				<img className='shipping' src = {ImgAsset.LandingPage_shipping} />
			</div>
		</div>
		<div className='FEATUREDDPRODUCTS'>
			<span className='FEATUREDPRODUCTS'>FEATURED PRODUCTS</span>
			<div className='Group20'>
				<div className='Rectangle1copy25'>
					<img className='Vector_18' src = {ImgAsset.LandingPage_Vector_18} />
					<img className='Vector_19' src = {ImgAsset.LandingPage_Vector_19} />
				</div>
				<div className='rate_3'>
					<img className='star_3' src = {ImgAsset.LandingPage_star_3} />
					<img className='starcopy3_3' src = {ImgAsset.LandingPage_starcopy3_3} />
					<img className='starcopy4_3' src = {ImgAsset.LandingPage_starcopy4_3} />
					<img className='starcopy_3' src = {ImgAsset.LandingPage_starcopy_3} />
					<img className='starcopy2_3' src = {ImgAsset.LandingPage_starcopy2_3} />
				</div>
				<div className='Group17'>
					<span className='_499'>$499</span>
					<span className='_599'>$599</span>
					<img className='Line1' src = {ImgAsset.LandingPage_Line1} />
				</div>
				<img className='c04297141' src = {ImgAsset.LandingPage_c04297141} />
				<span className='BlueSwadeNikeSneakers'>Blue Swade Nike Sneakers</span>
			</div>
			<div className='Group23'>
				<div className='Rectangle1copy25_1'>
					<img className='Vector_20' src = {ImgAsset.LandingPage_Vector_20} />
					<img className='Vector_21' src = {ImgAsset.LandingPage_Vector_21} />
				</div>
				<div className='rate_4'>
					<img className='star_4' src = {ImgAsset.LandingPage_star_4} />
					<img className='starcopy3_4' src = {ImgAsset.LandingPage_starcopy3_4} />
					<img className='starcopy4_4' src = {ImgAsset.LandingPage_starcopy4_4} />
					<img className='starcopy_4' src = {ImgAsset.LandingPage_starcopy_4} />
					<img className='starcopy2_4' src = {ImgAsset.LandingPage_starcopy2_4} />
				</div>
				<div className='Group17_1'>
					<span className='_499_1'>$499</span>
					<span className='_599_1'>$599</span>
					<img className='Line1_1' src = {ImgAsset.LandingPage_Line1_1} />
				</div>
				<img className='c04297141_1' src = {ImgAsset.LandingPage_c04297141_1} />
				<span className='BlueSwadeNikeSneakers_1'>Blue Swade Nike Sneakers</span>
			</div>
			<div className='Group24'>
				<div className='Rectangle1copy25_2'>
					<img className='Vector_22' src = {ImgAsset.LandingPage_Vector_22} />
					<img className='Vector_23' src = {ImgAsset.LandingPage_Vector_23} />
				</div>
				<div className='rate_5'>
					<img className='star_5' src = {ImgAsset.LandingPage_star_5} />
					<img className='starcopy3_5' src = {ImgAsset.LandingPage_starcopy3_5} />
					<img className='starcopy4_5' src = {ImgAsset.LandingPage_starcopy4_5} />
					<img className='starcopy_5' src = {ImgAsset.LandingPage_starcopy_5} />
					<img className='starcopy2_5' src = {ImgAsset.LandingPage_starcopy2_5} />
				</div>
				<div className='Group17_2'>
					<span className='_499_2'>$499</span>
					<span className='_599_2'>$599</span>
					<img className='Line1_2' src = {ImgAsset.LandingPage_Line1_2} />
				</div>
				<img className='c04297141_2' src = {ImgAsset.LandingPage_c04297141_2} />
				<span className='BlueSwadeNikeSneakers_2'>Blue Swade Nike Sneakers</span>
			</div>
		</div>
		<div className='Group515'>
			<div className='NAV'>
				<span className='HOME'>HOME            </span>
			</div>
			<div className='NAV_1'>
				<span className='BAGS'>BAGS</span>
				<span className='SNEAKERS'>SNEAKERS</span>
				<span className='BELT'>BELT</span>
				<span className='CONTACT'>CONTACT</span>
			</div>
		</div>
		<div className='HEADER'>
			<img className='divider' src = {ImgAsset.LandingPage_divider} />
			<div className='cart'>
				<span className='Items'> Items</span>
				<span className='_000'>$0.00</span>
			</div>
			<div className='language'>
				<span className='EN'>EN</span>
				<img className='arrowdown' src = {ImgAsset.LandingPage_arrowdown} />
			</div>
			<div className='currency'>
				<span className='USD'>USD</span>
				<img className='arrowdown_1' src = {ImgAsset.LandingPage_arrowdown_1} />
			</div>
			<div className='account'>
				<span className='Myprofile'>My profile</span>
				<img className='profile_close_2' src = {ImgAsset.LandingPage_profile_close_2} />
			</div>
			<img className='searchicon' src = {ImgAsset.LandingPage_searchicon} />
		</div>
		<div className='Cart'>
			<div className='Rectangle394'/>
			<div className='systemicon24pxCart'>
				<div className='Group'>
					<img className='Vector_24' src = {ImgAsset.LandingPage_Vector_24} />
					<img className='Vector_25' src = {ImgAsset.LandingPage_Vector_25} />
					<img className='Vector_26' src = {ImgAsset.LandingPage_Vector_26} />
				</div>
			</div>
			<div className='NotificationMark'>
				<div className='Ellipse'/>
				<span className='_2'>2</span>
			</div>
		</div>
		<div className='Discount_1'>
			<span className='_53433_1'>$534,33</span>
			<span className='_24Off_1'>24% Off</span>
		</div>
		<span className='_29943_1'>$299,43</span>
		<span className='_29943_2'>$299,43</span>
		<span className='FSNikeAirMax270React'>FS - Nike Air Max 270 React...</span>
		<span className='FSNikeAirMax270React_1'>FS - Nike Air Max 270 React...</span>
		<div className='Discount_2'>
			<span className='_53433_2'>$534,33</span>
			<span className='_24Off_2'>24% Off</span>
		</div>
		<img className='imageProduct_3' src = {ImgAsset.LandingPage_imageProduct_3} />
		<span className='NikeAirMax270React'>Nike Air Max 270 React</span>
		<span className='NikeAirMax270React_1'>Nike Air Max 270 React</span>
		<span className='NikeAirMax270React_2'>Nike Air Max 270 React</span>
		<div className='Frame14'>
			<span className='_29943_3'>$299,43</span>
		</div>
		<div className='Frame15'>
			<span className='_29943_4'>$299,43</span>
		</div>
		<div className='Frame19'>
			<span className='_29943_5'>$299,43</span>
		</div>
		<div className='Frame8'>
			<span className='_53433_3'>$534,33</span>
			<span className='_24Off_3'>24% Off</span>
		</div>
		<div className='Frame16'>
			<span className='_53433_4'>$534,33</span>
			<span className='_24Off_4'>24% Off</span>
		</div>
		<div className='Group476'>
			<div className='rate_6'>
				<img className='star_6' src = {ImgAsset.LandingPage_star_6} />
				<img className='starcopy3_6' src = {ImgAsset.LandingPage_starcopy3_6} />
				<img className='starcopy4_6' src = {ImgAsset.LandingPage_starcopy4_6} />
				<img className='starcopy_6' src = {ImgAsset.LandingPage_starcopy_6} />
				<img className='starcopy2_6' src = {ImgAsset.LandingPage_starcopy2_6} />
			</div>
			<span className='NikeAirMax270React_3'>Nike Air Max 270 React</span>
			<div className='Frame17'>
				<span className='_29943_6'>$299,43</span>
			</div>
			<div className='Frame18'>
				<span className='_53433_5'>$534,33</span>
				<span className='_24Off_5'>24% Off</span>
			</div>
		</div>
		<div className='Group477'>
			<div className='rate_7'>
				<img className='star_7' src = {ImgAsset.LandingPage_star_7} />
				<img className='starcopy3_7' src = {ImgAsset.LandingPage_starcopy3_7} />
				<img className='starcopy4_7' src = {ImgAsset.LandingPage_starcopy4_7} />
				<img className='starcopy_7' src = {ImgAsset.LandingPage_starcopy_7} />
				<img className='starcopy2_7' src = {ImgAsset.LandingPage_starcopy2_7} />
			</div>
			<span className='NikeAirMax270React_4'>Nike Air Max 270 React</span>
			<div className='Frame17_1'>
				<span className='_29943_7'>$299,43</span>
			</div>
			<div className='Frame18_1'>
				<span className='_53433_6'>$534,33</span>
				<span className='_24Off_6'>24% Off</span>
			</div>
		</div>
		<div className='Group479'>
			<div className='rate_8'>
				<img className='star_8' src = {ImgAsset.LandingPage_star_8} />
				<img className='starcopy3_8' src = {ImgAsset.LandingPage_starcopy3_8} />
				<img className='starcopy4_8' src = {ImgAsset.LandingPage_starcopy4_8} />
				<img className='starcopy_8' src = {ImgAsset.LandingPage_starcopy_8} />
				<img className='starcopy2_8' src = {ImgAsset.LandingPage_starcopy2_8} />
			</div>
			<span className='NikeAirMax270React_5'>Nike Air Max 270 React</span>
			<div className='Frame17_2'>
				<span className='_29943_8'>$299,43</span>
			</div>
			<div className='Frame18_2'>
				<span className='_53433_7'>$534,33</span>
				<span className='_24Off_7'>24% Off</span>
			</div>
		</div>
		<div className='Group480'>
			<div className='rate_9'>
				<img className='star_9' src = {ImgAsset.LandingPage_star_9} />
				<img className='starcopy3_9' src = {ImgAsset.LandingPage_starcopy3_9} />
				<img className='starcopy4_9' src = {ImgAsset.LandingPage_starcopy4_9} />
				<img className='starcopy_9' src = {ImgAsset.LandingPage_starcopy_9} />
				<img className='starcopy2_9' src = {ImgAsset.LandingPage_starcopy2_9} />
			</div>
			<span className='NikeAirMax270React_6'>Nike Air Max 270 React</span>
			<div className='Frame17_3'>
				<span className='_29943_9'>$299,43</span>
			</div>
			<div className='Frame18_3'>
				<span className='_53433_8'>$534,33</span>
				<span className='_24Off_8'>24% Off</span>
			</div>
		</div>
		<div className='Group478'>
			<div className='rate_10'>
				<img className='star_10' src = {ImgAsset.LandingPage_star_10} />
				<img className='starcopy3_10' src = {ImgAsset.LandingPage_starcopy3_10} />
				<img className='starcopy4_10' src = {ImgAsset.LandingPage_starcopy4_10} />
				<img className='starcopy_10' src = {ImgAsset.LandingPage_starcopy_10} />
				<img className='starcopy2_10' src = {ImgAsset.LandingPage_starcopy2_10} />
			</div>
			<span className='NikeAirMax270React_7'>Nike Air Max 270 React</span>
			<div className='Frame17_4'>
				<span className='_29943_10'>$299,43</span>
			</div>
			<div className='Frame18_4'>
				<span className='_53433_9'>$534,33</span>
				<span className='_24Off_9'>24% Off</span>
			</div>
		</div>
		<div className='Frame20'>
			<span className='_53433_10'>$534,33</span>
			<span className='_24Off_10'>24% Off</span>
		</div>
		<div className='label'>
			<img className='Rectangle20' src = {ImgAsset.LandingPage_Rectangle20} />
			<span className='HOT'>HOT</span>
		</div>
		<img className='imageProduct_4' src = {ImgAsset.LandingPage_imageProduct_4} />
		<img className='imageProduct_5' src = {ImgAsset.LandingPage_imageProduct_5} />
		<img className='imageProduct_6' src = {ImgAsset.LandingPage_imageProduct_6} />
		<img className='imageProduct_7' src = {ImgAsset.LandingPage_imageProduct_6} />
		<div className='itemhover'>
			<img className='overlay' src = {ImgAsset.LandingPage_overlay} />
			<div className='actions'>
				<div className='Group4'>
					<div className='Ellipse1'>
						<img className='Vector_27' src = {ImgAsset.LandingPage_Vector_27} />
						<img className='Vector_28' src = {ImgAsset.LandingPage_Vector_28} />
					</div>
					<img className='cart_2' src = {ImgAsset.LandingPage_cart_2} />
				</div>
				<div className='Group5'>
					<div className='Ellipse2'>
						<img className='Vector_29' src = {ImgAsset.LandingPage_Vector_29} />
						<img className='Vector_30' src = {ImgAsset.LandingPage_Vector_30} />
					</div>
					<img className='hearts' src = {ImgAsset.LandingPage_hearts} />
				</div>
			</div>
			<img className='pointer' src = {ImgAsset.LandingPage_pointer} />
		</div>
		<div className='ProductPicture'>
			<img className='ProductPicture01' src = {ImgAsset.LandingPage_ProductPicture01} />
			<img className='ProductPicture02' src = {ImgAsset.LandingPage_ProductPicture02} />
			<img className='ProductPicture03' src = {ImgAsset.LandingPage_ProductPicture03} />
		</div>
		<img className='shoesshoepngtransparentshoeimagespluspng171' src = {ImgAsset.LandingPage_shoesshoepngtransparentshoeimagespluspng171} />
		<div className='Group481'>
			<img className='Nike_logo_emblem_logotype1' src = {ImgAsset.LandingPage_Nike_logo_emblem_logotype1} />
			<span className='_01Jan2015'>01 Jan, 2015</span>
			<span className='FashionIndustry'>Fashion Industry</span>
		
		</div>
		<div className='Group482'>
			<span className='_01Jan2015_1'>01 Jan, 2015</span>
			<span className='BestDesignTools'>Best Design Tools</span>
			
		</div>
		<div className='Group483'>
			<span className='_01Jan2015_2'>01 Jan, 2015</span>
			<span className='HRCommunity'>HR Community</span>
			
		</div>
		<img className='figma1logo1' src = {ImgAsset.LandingPage_figma1logo1} />
		<div className='FOOTER'>
			<div className='Group484'>
				<div className='Group490'>
					<div className='Icon'>
						<div className='Rectangle383'/>
						<div className='Group400'>
							<div className='Group389'>
								<img className='Vector40Stroke' src = {ImgAsset.LandingPage_Vector40Stroke} />
							</div>
						</div>
					</div>
					<span className='EComm'>E-Comm</span>
				</div>
			</div>
		</div>
		<div className='footer'>
			<div className='Rectangle437'/>
			<div className='BOTTOM'>
				<img className='Rectangle1copy35' src = {ImgAsset.LandingPage_Rectangle1copy35} />
				<div className='Brands'>
					<img className='Shape327' src = {ImgAsset.LandingPage_Shape327} />
					<img className='Shape328' src = {ImgAsset.LandingPage_Shape328} />
					<img className='Shape328_1' src = {ImgAsset.LandingPage_Shape328_1} />
					<div className='Paypal'>
						<img className='Shape327_1' src = {ImgAsset.LandingPage_Shape327_1} />
						<img className='Shape327copy' src = {ImgAsset.LandingPage_Shape327copy} />
						<img className='Shape335' src = {ImgAsset.LandingPage_Shape335} />
						<img className='Shape335_1' src = {ImgAsset.LandingPage_Shape335_1} />
					</div>
					<div className='Group19'>
						<img className='Shape327_2' src = {ImgAsset.LandingPage_Shape327_2} />
						<img className='Shape329' src = {ImgAsset.LandingPage_Shape329} />
						<img className='Shape329_1' src = {ImgAsset.LandingPage_Shape329_1} />
						<span className='MasterCard'>MasterCard</span>
					</div>
					<div className='Westernunion'>
						<img className='Shape327_3' src = {ImgAsset.LandingPage_Shape327_3} />
						<img className='WESTERNUNION' src = {ImgAsset.LandingPage_WESTERNUNION} />
						<img className='Shape338' src = {ImgAsset.LandingPage_Shape338} />
					</div>
				</div>
				<span className='_2018Ecommercethemebywwwbisenbaevcom'>© 2018 Ecommerce theme by www.bisenbaev.com</span>
			</div>
		
			<div className='Group485'>
				<span className='ContactUs'>Contact Us</span>
				<span className='EComm4578MarmoraRoadGlasgowD0489GR'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</span>
			</div>
			<div className='OurOffers'>
				<div className='Group486'>
					<span className='OurOffers_1'>Our Offers</span>
					<span className='AboutUsInfomationPrivacyPolicyTermsConditions'>About Us
					Infomation 
					Privacy Policy
					Terms & Conditions</span>
				</div>
				<div className='Group487'>
					<div className='MyAccount'>
						<span className='MyAccount_1'>My Account</span>
					</div>
					<span className='AboutUsInfomationPrivacyPolicyTermsConditions_1'>About Us
					Infomation 
					Privacy Policy
					Terms & Conditions</span>
				</div>
				<div className='Group488'>
					<div className='Service'>
						<span className='Service_1'>Service</span>
					</div>
					<span className='AboutUsInfomationPrivacyPolicyTermsConditions_2'>About Us
					Infomation 
					Privacy Policy
					Terms & Conditions</span>
				</div>
				<div className='Group489'>
					<div className='Infomation'>
						<span className='Infomation_1'>Infomation</span>
					</div>
					<span className='AboutUsInfomationPrivacyPolicyTermsConditions_3'>About Us
					Infomation 
					Privacy Policy
					Terms & Conditions</span>
				</div>
			</div>
			<span className='FollowUs'>Follow Us</span>
			<span className='EComm_1'>E-Comm</span>
			<span className='Sincethe1500swhenanunknownprintertookagalleyoftypeandscrambled'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
			<img className='twitter' src = {ImgAsset.LandingPage_twitter} />
			<img className='facebook' src = {ImgAsset.LandingPage_facebook} />
			<div className='Icon_1'>
				<div className='Rectangle383_1'/>
				<div className='Group400_1'>
					<div className='Group389_1'>
						<img className='Vector40Stroke_1' src = {ImgAsset.LandingPage_Vector40Stroke_1} />
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
